const app = Vue.createApp({
    data() {
        return {
            showContent: false,        
            books: 
                {
                    categories: [
                        'Cooking',
                        'Programming',
                        'Sports',
                        'Productivity'
                    ],
                    cooking: [
                        'Frying fish',
                        'Chicken recipes',
                        'Kitchen basic skills',
                        'Salad recipes'
                    ],
                    
                    programming: [
                        'Learn python',
                        'Low level programming',
                        'Operating systems',
                        'Learn Frontend developemenet',
                        'Computer hardware'
                    ],
                    sports: [
                        'Tennis skills',
                        'Motorsports driving techniques',
                        'Football stories',
                        'Golf secrets'
                    ],
                    productivity: [
                        'Stay away from distractions',
                        'Studying techniques',
                        'How to read',
                        'Master taking notes'
                    ]
                }
        }
    },
    methods: {
        toggleChapter() {
            this.showContent = !this.showContent
        },
        
    }

})

app.mount('#contents')