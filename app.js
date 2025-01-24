const app = Vue.createApp({
    data() {
        return {
            showContent: true,
            chapter1: 'Introduction',
            content1_1: 'Reminder',
            content1_2: 'History',
            content1_3: 'Basics'
        }
    },
    methods: {
        toggleChapter() {
            this.showContent = !this.showContent
        },
        
    }

})

app.mount('#contents')