var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]
var chosen = []

favExercises.onshow=function(){
    for (i = 0; i < exercises.length; i++) 
        selExercises.addItem(exercises[i])
}

selExercises.onchange=function(){
    chosen.push(selExercises.text)
}

btnSummit.onclick=function(){
    exerciseOne = chosen[0]
    exerciseTwo = chosen[1]
    if ((exerciseOne == 'situps' && exerciseTwo == 'plank') || (exerciseOne == 'plank' && exerciseTwo == 'situps'))
        lblOutput.value = `You chose ${exerciseOne} and ${exerciseTwo} - those are the two core exercises.`
    else
        lblOutput.value = `You did not pick the two core exercises.`
}

btnMobileNav.onclick=function(){
    ChangeForm(mobileNav)
}