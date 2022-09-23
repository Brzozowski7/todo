import { pallete } from "../../../../misc/pallete"

export const guessSearchBarColor = (isDarkMode:boolean, active:boolean) =>{
    if(isDarkMode && active){
        return pallete.DarkGray
    }else if(!isDarkMode && active){
        return pallete.VeryLightGray
    }else if(isDarkMode && !active){
        return pallete.Black
    }else{
        return pallete.AlmostWhite
    }
}