// 1
var serial = {
    name: 'Wednesday',
    releaseDate: 2022,
    mainActor:'Jenna Ortega',
    episodes:8,
    screenwriter:{
        one:'David Lancerb',
        two:'Stefan Persson'
    },

    viewing:{
            original_website: 'netflix',
            fake_website:'rezka.ag'

        }
};
console.log('Serial -' + serial.name, 'был выпушен ' + serial.releaseDate, 'год', '\nВ главных ролях : ' +  serial.mainActor, '\nB',  serial.name, '-', serial.episodes, 'эпизод.', '\nСценаристом фильма были', serial.screenwriter.one, ',',  serial.screenwriter.two, '\n\t Посмотреть фильм можно на сайтах', serial.viewing.original_website, ',',  serial.viewing.fake_website)

// 2
var week = 'Tuesday'
switch (week) {
    case 'Monday':
        case 'monday':
        console.log('Понедельник')
            break
    case 'Tuesday':
        case 'tuesday':
        console.log('Вторник')
            break
    case 'Wednesday':
        case 'wednesday':
        console.log('Среда')
            break
    case 'Thursday':
        case 'thursday':
        console.log('Четверг')
            break
    case 'Friday':
        case 'friday':
        console.log('Пятница')
            break
    case 'Saturday':
        case 'saturday':
        console.log('Суббота')
            break
    case 'Sunday':
        case 'sunday':
        console.log('Воскресенье')
            break;
    default:
        console.log('unknown week');
}