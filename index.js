function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(workPlace = 'go to the office') {
    return `This Monday, I will ${workPlace}.`
}

function wrapAdjective(flair = '*') {
  return (moniker = "special") => {
        return `You are ${flair}${moniker}${flair}!`
    }
}

