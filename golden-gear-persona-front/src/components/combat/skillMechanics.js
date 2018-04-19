export const useBackstab = (props) =>{
    let i = props.mechanics.attackingAllyIndex;
    let baseDmg = props.mainChar[i].stats.strength;
    let totalDmg = baseDmg + 5;
    //ustaw w reducerze tymczasowe bonusy
    console.log('dmg', totalDmg)
    props.calculateDmg(totalDmg);
    props.attackReady(true);
}