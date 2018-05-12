export const useBackstab = (props) =>{
    let i = props.mechanics.attackingAllyIndex;
    let baseDmg = props.mainChar[i].stats.strength;
    let totalDmg = baseDmg + 5;
    //ustaw w reducerze tymczasowe bonusy
    console.log('dmg', totalDmg)
    props.calculateDmg(totalDmg);
    props.attackReady(true);
}

export const useHeal = (props) =>{
    let i = props.mechanics.attackingAllyIndex;
    let amount = props.mainChar[i].stats.magic;
    props.calculateHeal(amount);
    //props.allyRestoreHP(amount, whoToHealIndex);
}