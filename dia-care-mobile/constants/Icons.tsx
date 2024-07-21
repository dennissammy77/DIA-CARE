import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FontAwesome5, Fontisto, Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

interface Props { 
    name?: any | undefined;
    style?: any;
    size?: number;
}

export function NOTIFICATION_ICON({name, style, ...rest }: Props) {
    return (
        <MaterialCommunityIcons size={28} {...rest} style={style} name={name || 'bell-outline'}/>
    );
}

export function GLUCOSE_ICON({name, style, ...rest }: Props){
    return (
        <Fontisto size={28} style={style} {...rest} name={name || 'blood-drop'}/>
    );
}
 
export function ARROW_RIGHT_ICON({name, style, ...rest }: Props){
    return (
        <Feather size={28} style={style} {...rest} name={name || 'chevron-right'}/>
    );
}

export function ARROW_LEFT_ICON({name, style, ...rest }: Props){
    return (
        <Feather size={28} style={style} {...rest} name={name || 'chevron-left'}/>
    );
}

export function ARROW_UP_ICON({name, style, ...rest }: Props){
    return (
        <Feather size={28} style={style} {...rest} name={name || 'chevron-up'}/>
    );
}

export function ARROW_DOWN_ICON({name, style, ...rest }: Props){
    return (
        <Feather size={28} style={style} {...rest} name={name || 'chevron-down'}/>
    );
}

export function DONE_ICON({name, style, ...rest }: Props){
    return (
        <MaterialIcons size={28} style={style} {...rest} name={name || 'done'}/>
    );
}

export function HEARTBEAT_ICON({name, style, ...rest }: Props){
    return (
        <FontAwesome size={28} style={style} {...rest} name={name || 'heartbeat'}/>
    );
}

export function DOT_ICON({name, style, ...rest }: Props){
    return (
        <Entypo size={28} style={style} {...rest} name={name || 'dot-single'}/>
    );
}
export function BURGER_ICON({name, style, ...rest }: Props){
    return (
        <MaterialCommunityIcons size={28} style={style} {...rest} name={name || 'hamburger'}/>
    );
}
export function PERSON_ICON({name, style, ...rest }: Props){
    return (
        <Ionicons size={28} style={style} {...rest} name={name || 'person'}/>
    );
}
export function ADD_ICON({name, style, ...rest }: Props){
    return (
        <Ionicons size={28} style={style} {...rest} name={name || 'add'}/>
    );
}
export function HOME_ICON({name, style, ...rest }: Props){
    return (
        <MaterialIcons size={28} style={style} {...rest} name={name || 'dashboard'}/>
    );
}
export function SEARCH_ICON({name, style, ...rest }: Props){
    return (
        <Feather size={28} style={style} {...rest} name={name || 'search'}/>
    );
}
export function FOOD_ICON({name, style, ...rest }: Props){
    return (
        <MaterialCommunityIcons size={28} style={style} {...rest} name={name || 'food-apple'}/>
    );
}