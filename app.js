const app = Vue.createApp({
    data() {
        return {
            boxStyle: {
                backgroundColor: 'cadetblue',
            },
            colors: [
                "black",
                "blue",
                "red",
                "purple",
                "green",
                "gray",
                "orange"
            ],
            showContent: true,
            chapter1: 'Introduction',
            content1_1: 'Reminder',
            content1_2: 'History',
            content1_3: 'Basics',
            eventText: 'Hover Here',
            event2Text: 'No',
            x_mov:0, y_mov:0,
        }
    },
    methods: {
        toggleChapter() {
            this.showContent = !this.showContent
        },
        handleHover(e, message) {
            console.log(e);
            if(e.type="mouseover") {
                this.eventText = message;
            }
            if(e.type="mouseleave") {
                this.eventText = message;
            }
        },
        handleClick(e, message) {
            if(e.type="click") {
                this.event2Text = message;
            } else {
                this.event2Text = message;
            }
        },
        handleDblclick(e) {
            //pick a random color
            this.boxStyle.backgroundColor = this.colors[Math.floor(Math.random() * this.colors.length)];;
        },
        handleMovement(e) {
                this.x_mov = e.screenX;
                this.y_mov = e.screenY;            
        }
    }

})

app.mount('#contents')