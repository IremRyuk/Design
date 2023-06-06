type Act = {
    type:string
    changeValue:number
}
export let SwiperValue = (state:number = 1,action:Act) => {
    switch (action.type) {
        case 'changeValue':return state = action.changeValue
        default:return state
    }
}