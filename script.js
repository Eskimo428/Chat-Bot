const chatActive = document.querySelector('.chat-widget')
const chatWidgetSide = document.querySelector('.chat-widget__side')
const now = new Date()
const input = document.getElementById('chat-widget__input')
const messagesContainer = document.querySelector('.chat-widget__messages')
const сontainer = document.querySelector('.chat-widget__messages-container')
const chatClose = document.querySelector('.chat-close')
const answers = ['Могу ли я уточнить детали вашего вопроса?', 'Пожалуйста, продолжайте.&#128512;', 'Мне кажется, что вы правы.&#128512;', 'Вы рассмешили меня своим вопросом &#129315', 'Возможно, но я не уверен. Что вы имеете в виду?&#129320', 'Все зависит от конкретной ситуации. Можете описать ее более подробно? &#128527', 'Я не могу ответить на этот вопрос напрямую. Но могу предложить вам рассмотреть несколько вариантов. Как вы относитесь к этому? &#128580', 'Да, это возможно. Но не всегда это является оптимальным решением. Вы согласны?&#128522', 'Я могу понять, почему вы задаете этот вопрос. Но мне нужно больше информации, чтобы дать более точный ответ. Можете рассказать подробнее? &#128519', 'На этот вопрос сложно дать однозначный ответ. Однако, я могу дать вам несколько вариантов. Вы готовы их рассмотреть?', 'Я понимаю, что вы хотите услышать ответ "да" или "нет". Но иногда ситуации могут быть более сложными, чем кажутся на первый взгляд. Можете описать свою ситуацию? &#128579', 'Возможно, я могу помочь вам с этим вопросом. Но мне нужно больше информации. Вы можете рассказать более подробно? &#129303', 'Да, это возможно. Но не всегда это является наилучшим решением. Хотели бы вы рассмотреть другие варианты?', 'Да, это возможно. Но не всегда это является наилучшим решением. Хотели бы вы рассмотреть другие варианты?', 'Я понимаю, что вы хотите получить конкретный ответ на свой вопрос. Но ответ может зависеть от различных факторов. Какой контекст нужен для вашего вопроса?', 'Я не могу ответить на этот вопрос прямо сейчас. Но я могу провести дополнительное исследование и вернуться к вам с более точным ответом. Вас это устроит? &#129303', 'Я понимаю, что этот вопрос вызывает у вас тревогу. Но я уверен, что мы вместе найдем решение. Что вы думаете об этом?', 'Я не уверен, что понимаю ваш вопрос полностью. Можете объяснить его еще раз?', 'Я могу дать вам несколько вариантов ответов на этот вопрос. Какой из них вам наиболее интересен?&#129300']
let typingTimer;
const doneTypingInterval = 8000;
const sendAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/6680")
const gotAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/5464")

chatWidgetSide.addEventListener('click', event => {
    chatActive.classList.add('chat-widget_active')
    chatClose.classList.remove('display-none')
    input.focus()
    
})

chatClose.addEventListener('click', event => {
    chatActive.classList.remove('chat-widget_active')
    chatClose.classList.add('display-none')
})


input.addEventListener('keyup', event => {
    clearTimeout(typingTimer)
    if (event.code === 'Enter') {
        const message = input.value.trim()

        if (message !== '') {
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const time = hours + ':' + minutes;

            const messageElem = document.createElement('div')
            messageElem.classList.add('message')
            messageElem.innerHTML = `
            <div class="message message_client">
              <div class="message__time">${time}</div>
              <div class="message__text">${message}</div>
            </div>
          `
            messagesContainer.appendChild(messageElem)
            sendAudio.play()
        }


        function getRandomAnswer() {
            const randomIndex = Math.floor(Math.random() * answers.length)
            return answers[randomIndex]
        }
        getRandomAnswer()

        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const time = hours + ':' + minutes;

        const messageElem = document.createElement('div')
        messageElem.classList.add('message')
        messageElem.innerHTML = `
            <div class="message ">
              <div class="message__time">${time}</div>
              <div class="message__text">${getRandomAnswer()}</div>
            </div>
          `
        function scrollToBottom() {
            сontainer.scrollTop = messagesContainer.scrollHeight
        }

        setTimeout(() => {
            messagesContainer.appendChild(messageElem);
            gotAudio.play()
            scrollToBottom()
        }, 1200);

        if (input.value) {
            typingTimer = setTimeout(sendTypingReminder, doneTypingInterval);
        }

        function sendTypingReminder() {
            const messageElem = document.createElement('div');
            messageElem.classList.add('message');
            messageElem.innerHTML = `
              <div class="message__text">Привет &#128075! Вы все еще тут?</div>
            `;
            messagesContainer.appendChild(messageElem);
            scrollToBottom()
        }


        input.value = ''

    }

})


