const data = [{
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        loaction: 'Dhaka',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 28,
        gender: 'male',
        lookingFor: 'female',
        loaction: 'Rajshahi',
        image: 'https://randomuser.me/api/portraits/men/84.jpg'
    },
    {
        name: 'William Johnson',
        age: 36,
        gender: 'female',
        lookingFor: 'male',
        loaction: 'Rangpur',
        image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
        name: 'Nicola Tesla',
        age: 18,
        gender: 'female',
        lookingFor: 'male',
        loaction: 'Chittagong',
        image: 'https://randomuser.me/api/portraits/women/23.jpg'
    }
];
const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);


// Next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item">looking for: ${currentProfile.lookingFor}</li>
    </ul>
    `;
        document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">
    `
    } else {
        window.location.reload();
    }

}

function* profileIterator(profiles) {
    for (let i = 0; i < profiles.length; i++) {
        yield profiles[i];
    }
}

// function profileIterator(profiles) {
//     let nextIndex = 0;
//     return {
//         next: function () {
//             return nextIndex < profiles.length ? {
//                 value: profiles[nextIndex++],
//                 done: false
//             } : {
//                 done: true
//             }
//         }
//     }
// }