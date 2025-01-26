const app = Vue.createApp({
    data() {
        return {
            showContent: true,
            chapters: {
                chapter1: 'Introduction',
                chapter2: 'Basics'
            },
            chapterContent: [
                {
                    section1: 'Reminder',
                    section2: 'History',
                    section3: 'Requirements' 
                },
                {
                    section1: 'How to slice vegetables',
                    section2: 'How to slice meat',
                    section3: 'How to use oven',
                    section4: 'Seasonings'
                }
            ]
        }
    },
    methods: {
        toggleChapter() {
            this.showContent = !this.showContent
        },
        
    }

})

app.mount('#contents')