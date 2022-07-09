const event = {
    name: 'Birthday Party!!!',
    guestList: ['Bala','Andrews','Jack'],
    printGuestList(){
        this.guestList.forEach((guest)=>{
            console.log(guest +" is Attending "+this.name)
        })
    }
}
event.printGuestList()