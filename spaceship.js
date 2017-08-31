function CrewMember(position, currentShip = "Looking for a Rig") {
  this.position = position
  this.currentShip = currentShip
  if (this.currentShip !== "Looking for a Rig") {
    this.currentShip = currentShip
  }
  this.engageWarpDrive = function(){
    if (this.position === 'Pilot' && this.currentShip !== "Looking for a Rig"){
      this.currentShip.warpDrive = "engaged!"
    }else{
    return "had no effect"
  }
}
  this.setsInvisibility = function(){
    if (this.position === 'Defender' && this.currentShip !== "Looking for a Rig"){
      this.currentShip.cloaked = true
    }else{
    return "had no effect"
  }
}
  this.chargePhasers = function(){
    if (this.position === 'Gunner' && this.currentShip !== "Looking for a Rig"){
      this.currentShip.phasersCharge = "charged!"
    }else{
    return "had no effect"
    }
  }
}

function Spaceship(name, crewMembers = [], phasers, shields, cloaked = false, warpDrive = "disengaged", docked = true, phasersCharge = "uncharged"){
  this.name = name
  this.crewMembers = crewMembers
  //each crewmember.currentship = this
  this.phasers = phasers
  this.shields = shields
  this.cloaked = cloaked
  this.warpDrive = warpDrive
  this.docked = docked
  this.phasersCharge = phasersCharge
  if (this.crewMembers.length !== 0) {
    this.docked = false
  }

  for (let i = 0, n = this.crewMembers.length; i < n; i++) {
    this.crewMembers[i].currentShip = this
  }

}








//
