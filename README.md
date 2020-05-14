Եթե անգլերենս չհասկանաս տակը ռուսերեն ել կա 


ENGLISH 

If you want to use the slider and do not want to import the entire project, you can import only the “slider” folder. After that, import the “Slider.js” file from the “slider” folder and create the “slider” component in the project. And now you can create slides with HTML tags in it.
EXAMPLE:{
     
        <Slider>
            <p> Good morning </p>
        </Slider>
    
}

Each HTML tag will look like a separate slide.
This slide is stylized and customized for images, and it will be convenient to create { 'img /' }tags in it. 
EXAMPLE:{

        <Slider>
            <img alt = 'img' src = '. / img / 293.jpg '/>
            <img alt = 'img' src = '. / img / 296.jpg '/>
            <img alt = 'img' src = '. / img / 298.jpeg '/>
            <img alt = 'img' src = '. / img / 299.jpeg '/>
        </Slider>

}

But no one forbids you to customize the slider and styles. 😉😉

The slider receives 2 props (autoPlay and duration), if you do not send him these 2 props, it will not work correctly.
The first prop (autoPlay) will include automatic slide switching.
autoPlay gets {true} or {false} and the second prop (duration) will determine the slide switch time in seconds.
EXAMPLE:{

        <Slider autoPlay = {true} duration = {2}>
            <img alt = 'img' src = '. / img / 293.jpg '/>
            <img alt = 'img' src = '. / img / 296.jpg '/>
            <img alt = 'img' src = '. / img / 298.jpeg '/>
            <img alt = 'img' src = '. / img / 299.jpeg '/>
        </Slider>

}

Explanation the code, the code will create a slider and insert images (img / tags) into it and will flip the slide every 2 seconds.

If you still decide import full project you can run this project via 

### yarn start

Open http://localhost:3000 to view it in the browser.

<!-- ========================================================================================= -->

Русский 

Если вы хотите использовать slider и не хотите импортировать весь проект, вы можете импортировать только папку "slider".После этого импортируйте файл «Slider.js» из папки "slider" и создайте компонент "slider" в проекте. И теперь вы можете создавать слайды с HTML-тегами в нем.
ПРИМЕР:{

        <Slider>
              <p> Доброе утро </p>
        </Slider>

}

Каждый тег HTML будет выглядеть как отдельный слайд.
Этот слайд стилизован и настроен для изображений, и в нем будет удобно создавать теги { 'img /' }. 
ПРИМЕР:{

        <Slider>
            <img alt = 'img' src = '. / img / 293.jpg '/>
            <img alt = 'img' src = '. / img / 296.jpg '/>
            <img alt = 'img' src = '. / img / 298.jpeg '/>
            <img alt = 'img' src = '. / img / 299.jpeg '/>
        </Slider>

}
Но никто не запрещает вам настраивать слайдер и стили. 😉😉

Слайдер получает 2 props (autoPlay, duration), если вы не отправите ему эти 2 props, он не будет работать правильно.
Первая prop (autoPlay) будет включать автоматическое переключение слайдов.
autoPlay получает {true} или {false}, а второй prop (duration) будет определять время переключения слайдов в секунду
ПРИМЕРЕ:{

        <Slider autoPlay = {true} duration = {2}>
            <img alt = 'img' src = ''/>
            <img alt = 'img' src = ''/>
            <img alt = 'img' src = ''/>
            <img alt = 'img' src = ''/>
        </Slider>

}

Пояснения кода, код создаст слайдер и вставит в него изображения (теги img /) и будет переворачивать слайд каждые 2 секунды.

Если вы все еще решили импортировать полный проект, вы можете запустить этот проект через

### yarn start

Откройте http: // localhost: 3000, чтобы просмотреть его в браузере.
