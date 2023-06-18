type Act = {
    type:string
}
export let AlertsRed = (state:boolean = false,action:Act) => {
    switch (action.type) {
        case 'changeValue':return !state
        default:return state
    }
}
export let AlertsRedEmpty = (state:boolean = false,action:Act) => {
    switch (action.type) {
        case 'changeValueEmpty':return !state
        default:return state
    }
}