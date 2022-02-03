<template>
  <h1>About Me</h1>

  <h2>Patryk Sroka</h2>

  <div id="center_text">
    <p>
      Yes, my name is Patryk Sroka. Born in 2002 in the city of Oświęcim
      (Poland). Moved to Sweden a long time ago now, and in here I have been
      living all over the place. Right now I am settled a little bit outside of
      the city of <a href="#maps">Älvängen</a> . I am 20 years old as of today.
      I have been coding since I was around 15/16, it started with some basic
      HTML and CSS and after I started studying at "NTI Gymnasiet" my knowledge
      expanded with some JavaScript. I gratuated year 2021, same year as I
      started studying at "IT Högskolan". I have always been inquisitive and
      want to expand my skills in anything I am put into. Programming might be
      one of my main hobbies, but I got a few more. I am a gamer and content
      cretor over at Twitch. I also love music, both listening to and making my
      own every now and than. I can not live without it. Everything I do I have
      to have music in the background or in my headphones. My favourite genres
      are rap and metal. I also speak a lot of languages. That is about it.
    </p>
  </div>

  <h2>This is my Twitch channel</h2>

  <iframe
    src="https://player.twitch.tv/?channel=pappapatryk&parent=www.example.com"
    frameborder="0"
    allowfullscreen="true"
    scrolling="no"
    height="378"
    width="620"
  />

  <h2>This is a spotify playlist I listen to a lot now</h2>
  <iframe
    src="https://open.spotify.com/embed/playlist/6EllFPl3NlIClslGZh0XCt?utm_source=generator"
    frameborder="0"
    allowfullscreen="true"
    scrolling="no"
    height="378"
    width="620"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  />

  <h2>This is where I live</h2>

  <iframe
    id="maps"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8466.765476249735!2d12.115737690729608!3d57.95918468155321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4645432cd19c5afb%3A0x7f1bef16854a228c!2zNDQ2IDM3IMOEbHbDpG5nZW4!5e0!3m2!1spl!2sse!4v1643723449940!5m2!1spl!2sse"
    width="620"
    height="450"
    style="border: 0"
    allowfullscreen=""
    loading="lazy"
  />
</template>

<style>
  #center_text {
    display: flex;
    justify-content: center;
  }
  p {
    width: 620px;
  }
</style>
