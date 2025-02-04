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
                            level: 'Beginner/Moderate',
                            liked: false
                        },
                        {
                            title: 'Kitchen basic skills',
                            cover: 'assets/cooking-cover2.jpg',
                            author: 'A.sam',
                            level: 'Beginner',
                            liked: true
                        },
                        {
                            title: 'Chicken recipes',
                            cover: 'assets/cooking-cover3.jpg',
                            author: 'E.ben',
                            level: 'Moderate',
                            liked: true
                        },
                        {
                            title: 'Salad recipes',
                            cover: 'assets/cooking-cover4.jpg',
                            author: 'S.yasmin',
                            level: 'Beginner',
                            liked: false
                        }  
                    ],
                    
                    programming: [
                        {
                            title: 'Learn python',
                            cover: '#',
                            author: 'G.jenny',
                            level: 'Beginner/Moderate',
                            liked: false
                        },
                        {
                            title: 'Low level programming',
                            cover: '#',
                            author: 'A.sam',
                            level: 'Beginner',
                            liked: true
                        },
                        {
                            title: 'Operating systems',
                            cover: '#',
                            author: 'E.ben',
                            level: 'Moderate',
                            liked: true
                        },
                        {
                            title: 'Learn Frontend developemenet',
                            cover: '#',
                            author: 'S.yasmin',
                            level: 'Beginner',
                            liked: false
                        },
                        {
                            title: 'Computer hardware',
                            cover: '#',
                            author: 'S.yasmin',
                            level: 'Beginner',
                            liked: false
                        }
                            
                    ],
                    sports: [
                        {
                            title: 'Tennis skills',
                            cover: '#',
                            author: 'G.jenny',
                            level: 'Beginner/Moderate',
                            liked: false
                        },
                        {
                            title: 'Motorsports driving techniques',
                            cover: '#',
                            author: 'A.sam',
                            level: 'Beginner',
                            liked: false
                        },
                        {
                            title: 'Football stories',
                            cover: '#',
                            author: 'E.ben',
                            level: 'Moderate',
                            liked: false
                        },
                        {
                            title: 'Golf secrets',
                            cover: '#',
                            author: 'S.yasmin',
                            level: 'Beginner',
                            liked: false
                        }     
                    ],
                    productivity: [
                        {
                            title: 'Stay away from distractions',
                            cover: '#',
                            author: 'G.jenny',
                            level: 'Beginner/Moderate',
                            liked: false
                        },
                        {
                            title: 'Studying techniques',
                            cover: '#',
                            author: 'A.sam',
                            level: 'Beginner',
                            liked: true
                        },
                        {
                            title: 'How to read books',
                            cover: '#',
                            author: 'E.ben',
                            level: 'Moderate',
                            liked: false
                        },
                        {
                            title: 'Master taking notes',
                            cover: '#',
                            author: 'S.yasmin',
                            level: 'Beginner',
                            liked: true
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
        },
        toggleLike(book) {
            /*if(book.liked == true) {
                book.liked = false;
            } else {
                book.liked = true;
            } */
           book.liked = !book.liked;
        }
        
    },
    computed: {
        // filter books to only liked books
        cookingLiked() {
            return this.books.cooking.filter(book => book.liked)
        },
        programmingLiked() {
            return this.books.programming.filter(book => book.liked)
        },
        sportsLiked() {
            return this.books.sports.filter(book => book.liked)
        }
    }

})

app.mount('#contents')