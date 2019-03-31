function checkScreenWidth() {
    if (screen.width >= 1200) {
        return 2;
    } else {
        return 1;
    }
}


function changePage(url) {
    document.location.href = url;
}


let eventData = [
    {
        name: 'Piano Concerto Competition',
        when: 'February 18th, 2017',
        where: 'Montgomery County',
        program: [
            'Grieg: Piano Concerto in A Minor',
        ],
        pic: './Images/Concerto.jpg'
    },
    {
        name: 'Reflections',
        when: 'November, 2018',
        where: 'Studio Album',
        program: [
            'Einaudi: Love is a Mystery',
            'Einaudi: Nightbook',
            'Satie: Gymnopedie',
            'Chopin: Prelude in B Minor',
            'and more...'
        ],
        pic: './Images/Reflections.jpg'
    },
    {
        name: 'Spring Recital',
        when: 'April, 2019',
        where: 'Baldwin Wallace University',
        program: [
            'Debussy: La Plus que Lente',
            'Schubert: Drei Klavierstucke, II',
        ],
        pic: './Images/Jury.jpg'
    },
];


let data = {
    name: 'Helen Kohler',
    instrument: 'Pianist',
    spotify: 'https://open.spotify.com/artist/3mCB4aLvvnxEFuzq3DSVBL',
    google: 'https://play.google.com/store/music/artist/Helen_Kohler?id=A6ayynzizm7fjtho4cul7g2x46a',
    youtube: 'https://www.youtube.com/channel/UCOE2n8EXKJnt67mDJ0hmMnw',
    amazon: 'https://www.amazon.com/s/ref=ntt_srch_drd_B07C6N9TJ7?ie=UTF8&field-keywords=Helen%20Kohler&index=digital-music&search-type=ss',
    instagram: 'https://www.instagram.com/the.helen.of.troy/',
    header: 'background-image: url("https://imgur.com/b2Znm9J.jpg")',
    body: 'background-image: url("https://imgur.com/Yaw3a63.jpg")',
    footer: 'background: #ebebeb;',
};


Vue.component('event-card', {
    props: {
        count: Number,
    },
    data: function() {
        return {
            name: eventData[this.count].name,
            when: eventData[this.count].when,
            where: eventData[this.count].where,
            program: eventData[this.count].program,
            pic: eventData[this.count].pic
        };
    },
    template: `
            <div class="event-card">
                <template>
                    <img :src="pic" width="100%" style="max-width: 500px;">
                </template>
                <div style="margin: 1em;">
                    <b class="title">{{ name }}</b>
                    <p style="font-style: italic;">{{ when }}</p>
                    <p style="font-style: italic;">{{ where }}</p>
                </div>
                <template v-for="piece in program">
                    <p style="font-size: small;">{{ piece }}</p>
                </template>
            </div>`,
});


var page = new Vue({
    el: '#page',
    data: data,
});


var glide = new Glider(document.querySelector('#events'), {
    slidesToShow: checkScreenWidth(),
    scrollLock: true,
    draggable: true,
    dots: '#dots'
});