
let newnm=document.getElementById("nome")
let newpost=document.getElementById("pstNom")
let newpre=document.getElementById("prnom")
let newpays=document.getElementById("country")
let newgenre=document.getElementById("gnre")
let newgit=document.getElementById("gthub")
let form = document.getElementById('form')
let tableBody = document.querySelector('table tbody')
let submitBtn = document.getElementById('btnsubmit')

let editMode = false
let editionTak = null

let tasks = [
    {
        'Nom' : 'Amouzouvi',
        'PostNom' : 'Eale',
        'Prenom' : 'Airliss',
        'Pays' : 'Kenya',
        'Genre' : 'M',
        'Github' : '25%',
        'isdone' : false
    },
    {
        'Nom' : 'Dingele',
        'PostNom' : 'Wabibiakia',
        'Prenom' : 'Thys',
        'Pays' : 'RCA',
        'Genre' : 'F',
        'Github' : '50%',
        'isdone' : true
    },

    {
        'Nom' : 'Okito',
        'PostNom' : 'Lembe',
        'Prenom' : 'Joel',
        'Pays' : 'RDC',
        'Genre' : 'M',
        'Github' : '65%',
        'isdone' : true
    },
]

function loadTasksInTable() {
    tableBody.innerHTML = ''

    for (const task of tasks) {
        let temp = `<tr>
            <td>${task.Nom}</td>
            <td>${task.PostNom}</td>
            <td>${task.Prenom}</td>
            <td>${task.Pays}</td>
            <td>${task.Genre}</td>
            <td>${task.Github}</td>
            <td>
                <input type="checkbox" name="" ${task.isdone ? 'checked' :'' } >
                <button onclick="deleteTask(this)">Supprimmer</button>
                <button data-Nom="${task.Nom}" data-PostNom="${task.PostNom}" data-Prenom="${task.Prenom}" data-Pays="${task.Pays}" data-Genre="${task.Genre}" data-Github="${task.Github}"  onclick="editTask(this)">Modifier</button>
            </td>
        </tr>`

        tableBody.innerHTML += temp
    }
}

loadTasksInTable()

form.addEventListener('submit', function(e){
    e.preventDefault();
    let nom=newnm.value
    let postnom=newpost.value
    let prenom=newpre.value
    let pays=newpays.value
    let genre=newgenre.value
    let github=newgit.value
    if(editMode) {
        updateTask()
    } else {
        addTask()
    }

 
})

function addTask(value) {
    let apprenant= {

        'Nom' : newnm.value,
        'PostNom' : newpost.value,
        'Prenom' : newpre.value,
        'Pays' : newpays.value,
        'Genre' : newgenre.value,
        'Github' :newgit.value,
        'isdone' : true
      }
    tasks.push(apprenant) 
    newnm.value=""
    newpost.value=""
    newpre.value=''
    newpays.value=''
    newgenre.value=''
    newgit.value= ''
    loadTasksInTable()
}

function updateTask(value) {
    let apprenant= { 

        'Nom' : tasks.find((t) => t.Nom == editionTak.Nom).Nom=newnm.value,
        'PostNom' :tasks.find((t) => t.PostNom == editionTak.PostNom).PostNom= newpost.value,
        'Prenom' : tasks.find((t) => t.Prenom == editionTak.Prenom).Prenom=newpre.value,
        'Pays' : tasks.find((t) => t.Pays == editionTak.Pays).Pays=newpays.value,
        'Genre' :tasks.find((t) => t.Genre == editionTak.Genre).Genre= newgenre.value,
        'Github' :tasks.find((t) => t.Github == editionTak.Github).Github=newgit.value,
        'isdone' : true
      }
    
  
    
    loadTasksInTable()

    // init
    editModeEnabled(false)
}

function deleteTask(e){
    e.parentNode.parentNode.remove()
}

function editTask(e) {

    editModeEnabled(true)
    newnm.value=e.dataset.nom
    newpost.value=e.dataset.postnom
    newpre.value=e.dataset.prenom
    newpays.value=e.dataset.pays
    newgenre.value=e.dataset.genre
    newgit.value=e.dataset.github
    editionTak = tasks.find((t) => t.Nom == e.dataset.nom)
}

function editModeEnabled(enabled) {
    if(enabled) {
        editMode = true
        submitBtn.innerText = "Modifier"
    } else {
        editMode = false
        submitBtn.innerText = "Ajouter"
        editionTak = null
        newnm.value=""
        newpost.value=""
        newpre.value=''
        newpays.value=''
        newgenre.value=''
        newgit.value= ''
    }
}