const app = Vue.createApp({
    data() {
        return {
            showContent: true,
            showCover: null,        
            books: 
                {
                    categories: [
                        'Cooking',
                        'Programming',
                        'Sports',
                        'Productivity'
                    ],
                    cooking: [
                        {
                            title: 'Frying fish',
                            cover: 'assets/cooking-cover.jpg',
                            author: 'G.jenny',
                            level: 'Beginner/Moderate'
                        },
                        {
                            title: 'Kitchen basic skills',
                            cover: 'assets/cooking-cover2.jpg',
                            author: 'A.sam',
                            level: 'Beginner'
                        },
                        {
                            title: 'Chicken recipes',
                            cover: 'assets/cooking-cover3.jpg',
                            author: 'E.ben',
                            level: 'Moderate'
                        },
                        {
                            title: 'Salad recipes',
                            cover: 'assets/cooking-cover4.jpg',
                            author: 'S.yasmin',
                            level: 'Beginner'
                        }  
                    ],
                    
                    programming: [
                        {
                            title: 'Learn python',
                            cover: '#',
                            author: 'G.jenny',
                            level: 'Beginner/Moderate'
                        },
                        {
                            title: 'Low level programming',
                            cover: '#',
                            author: 'A.sam',
                            level: 'Beginner'
                        },
                        {
                            title: 'Operating systems',
                            cover: '#',
                            author: 'E.ben',
                            level: 'Moderate'
                        },
                        {
                            title: 'Learn Frontend developemenet',
                            cover: '#',
                            author: 'S.yasmin',
                            level: 'Beginner'
                        },
                        {
                            title: 'Computer hardware',
                            cover: '#',
                            author: 'S.yasmin',
                            level: 'Beginner'
                        }
                            
                    ],
                    sports: [
                        {
                            title: 'Tennis skills',
                            cover: '#',
                            author: 'G.jenny',
                            level: 'Beginner/Moderate'
                        },
                        {
                            title: 'Motorsports driving techniques',
                            cover: '#',
                            author: 'A.sam',
                            level: 'Beginner'
                        },
                        {
                            title: 'Football stories',
                            cover: '#',
                            author: 'E.ben',
                            level: 'Moderate'
                        },
                        {
                            title: 'Golf secrets',
                            cover: '#',
                            author: 'S.yasmin',
                            level: 'Beginner'
                        }     
                    ],
                    productivity: [
                        {
                            title: 'Stay away from distractions',
                            cover: '#',
                            author: 'G.jenny',
                            level: 'Beginner/Moderate'
                        },
                        {
                            title: 'Studying techniques',
                            cover: '#',
                            author: 'A.sam',
                            level: 'Beginner'
                        },
                        {
                            title: 'How to read books',
                            cover: '#',
                            author: 'E.ben',
                            level: 'Moderate'
                        },
                        {
                            title: 'Master taking notes',
                            cover: '#',
                            author: 'S.yasmin',
                            level: 'Beginner'
                        }    
                    ]
                }
        }
    },
    methods: {
        toggleChapter() {
            this.showContent = !this.showContent
        },
        toggleCover(e, display) {
            if(e.type="mouseover") {
                this.showCover = display;
            }
            else {
                this.showCover = display;
            }
        }
        
    }

})

app.mount('#contents')