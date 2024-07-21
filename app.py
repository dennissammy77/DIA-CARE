from flask import Flask, render_template, request
import joblib
import numpy as np

# Initialize the Flask app
app = Flask(__name__)

# Load the trained model
model = joblib.load('random_forest_diabetes_model.joblib')
def suggest_meals_and_exercise(prediction):
    """Suggest meals and exercises based on diabetes prediction."""
    if prediction:
        meals = [
            "Grilled salmon with quinoa and spinach",
            "Chicken stir-fry with vegetables",
            "Lentil soup with whole grain bread"
        ]
        exercises = [
            "30 minutes of brisk walking",
            "15 minutes of cycling",
            "20 minutes of yoga"
        ]
    else:
        meals = [
            "Whole grain sandwich with turkey and vegetables",
            "Fruit salad with yogurt",
            "Oatmeal with berries"
        ]
        exercises = [
            "20 minutes of jogging",
            "10 minutes of jump rope",
            "15 minutes of strength training"
        ]
    return meals, exercises

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        try:
            # Extract data from form
            random_blood_sugar = float(request.form['random_blood_sugar'])
            bmi = float(request.form['bmi'])
            systolic_bp = float(request.form['systolic_bp'])
            diastolic_bp = float(request.form['diastolic_bp'])

            # Prepare the feature vector for prediction
            input_features = [random_blood_sugar, bmi, systolic_bp, diastolic_bp]
            input_features = np.array(input_features).reshape(1, -1)

            # Make prediction
            prediction = model.predict(input_features)[0]

            # Generate meal and exercise suggestions
            meals, exercises = suggest_meals_and_exercise(prediction)

            # Render template with prediction and suggestions
            return render_template('index.html', prediction=prediction, meals=meals, exercises=exercises)

        except ValueError as e:
            # Handle input conversion error
            return render_template('index.html', error="Invalid input. Please enter valid numbers.")

    # Render the form page on GET request
    return render_template('index.html', prediction=None)

if __name__ == '__main__':
    app.run(debug=True)
