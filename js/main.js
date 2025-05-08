const languageSelection = document.querySelector('select');
const rootelement = document.querySelector('html');

const menuTitle = document.getElementById('menuTitle');
const goToMenubtn = document.getElementById('goToMenubtn');
const showAllbtns = Array.from(document.getElementsByClassName("show-all"));
const specialCakes = document.getElementById("specialCakes");
const rectangularCakes = document.getElementById("rectangularCakes")
const originalCakes = document.getElementById("originalCakes")
const figuriesCakes = document.getElementById('figuriesCakes')
const contactTitle = document.getElementById('contactTitle')
const reservationPhone = document.getElementById('reservationPhone')
const customerServicesPhone = document.getElementById('customerServicesPhone')
const address = document.getElementById('address')
const addressDetailes = document.getElementById("addressDetailes")
const workingHours = document.getElementById("workingHours")
const firstHours = document.getElementById('firstHours')
const delivaryService = document.getElementById("delivaryService")
const delivaryHours = document.getElementById("delivaryHours")

const languageSwitching = {
    en: {
        menu: "All Menu",
        goToMenu: "Go To Menu",
        showAll: "show All",
        specialCakes: "Special Cakes",
        rectangularCakes: "Rectangular Cakes",
        originalCakes: "Original Cakes",
        figuriesCakes: "3D Cakes",
        contactTitle: "Contact",
        reservationPhone: "Reservation Phone",
        customerServicesPhone: "Customer Services Phone",
        address: "Address",
        addressDetailes: "Fayoum, Mesallah Square, In front of Misr Insurance Building",
        workingHours: "Working Hours",
        firstHours: "7 AM : 2 AM",
        delivaryService: "Delivery Service",
        delivaryHours: "10 AM : 12 PM"
    },

    ar: {
        menu: "القائمة",
        goToMenu: "عرض القائمة",
        showAll: "عرض الكل",
        specialCakes: "تورت اسبشيال",
        rectangularCakes: "تورت مستطيل",
        originalCakes: "تورت اورجينال",
        figuriesCakes: "تورت ثلاثي الأبعاد",
        contactTitle: "للتواصل",
        reservationPhone: "تليفون حجز الطلبات",
        customerServicesPhone: "تليفون خدمة العملاء",
        address: "العنوان",
        addressDetailes: "الفيوم, ميدان المسلة ,أمام عمارة مصر للتأمين",
        workingHours: "مواعيد العمل",
        firstHours: "٧ ص : ٢ ص",
        delivaryService: "خدمة التوصيل",
        delivaryHours: "١٠ ص : ١٢ م"
    }
}
languageSelection.addEventListener('change', () => {

    if (languageSelection.value == 'ar') {
        arabicTranslation()
        
    }
 
     if (languageSelection.value == 'en') {
        englishTranslation()
    }
    
});

function arabicTranslation() {
    rootelement.dir = 'rtl'
    rootelement.lang = 'ar'
    menuTitle.innerHTML = languageSwitching.ar.menu
    goToMenubtn.innerHTML = languageSwitching.ar.goToMenu
    for (let i = 0; i < showAllbtns.length; i++) {
        showAllbtns[i].innerHTML = languageSwitching.ar.showAll
    }
    specialCakes.innerHTML = languageSwitching.ar.specialCakes
    rectangularCakes.innerHTML = languageSwitching.ar.rectangularCakes
    originalCakes.innerHTML = languageSwitching.ar.originalCakes
    figuriesCakes.innerHTML = languageSwitching.ar.figuriesCakes
    contactTitle.innerHTML = languageSwitching.ar.contactTitle
    reservationPhone.innerHTML = languageSwitching.ar.reservationPhone
    customerServicesPhone.innerHTML = languageSwitching.ar.customerServicesPhone
    address.innerHTML = languageSwitching.ar.address
    addressDetailes.innerHTML = languageSwitching.ar.addressDetailes
    workingHours.innerHTML = languageSwitching.ar.workingHours
    firstHours.innerHTML = languageSwitching.ar.firstHours
    delivaryService.innerHTML = languageSwitching.ar.delivaryService
    delivaryHours.innerHTML = languageSwitching.ar.delivaryHours

}

function englishTranslation() {
    rootelement.dir = 'ltr'
    rootelement.lang = 'en'
    menuTitle.innerHTML = languageSwitching.en.menu
    goToMenubtn.innerHTML = languageSwitching.en.goToMenu
     for (let i = 0; i < showAllbtns.length; i++) {
        showAllbtns[i].innerHTML = languageSwitching.en.showAll
    }
    specialCakes.innerHTML = languageSwitching.en.specialCakes
    rectangularCakes.innerHTML = languageSwitching.en.rectangularCakes
    originalCakes.innerHTML = languageSwitching.en.originalCakes
    figuriesCakes.innerHTML = languageSwitching.en.figuriesCakes
    contactTitle.innerHTML = languageSwitching.en.contactTitle
    reservationPhone.innerHTML = languageSwitching.en.reservationPhone
    customerServicesPhone.innerHTML = languageSwitching.en.customerServicesPhone
    address.innerHTML = languageSwitching.en.address
    addressDetailes.innerHTML = languageSwitching.en.addressDetailes
    workingHours.innerHTML = languageSwitching.en.workingHours
    firstHours.innerHTML = languageSwitching.en.firstHours
    delivaryService.innerHTML = languageSwitching.en.delivaryService
    delivaryHours.innerHTML = languageSwitching.en.delivaryHours
}