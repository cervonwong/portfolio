<!--
  - Copyright (C) 2021–2022 Cervon Wong.
  -->

<template>
  <main>
    <div class="margin-wrapper">
      <div class="line-length-limit-wrapper">
        <h1>About me</h1>
        <p>
          Hi! I'm Cervon Wong. I'm currently studying my fifth year at NUS High
          School of Math and Science. I have been working with code and design
          for about six years now.
        </p>
        <p>
          One thing that I enjoy about software development is creating products
          that others can use and find valuable. This has driven me to pursue
          computer science and engineering, experimenting with front-end
          development, UI/UX design and machine learning, and to create
          <em>never-done-before</em> experiences using my skills to benefit
          people around me.
        </p>
        <p>
          I'll be sharing more details about myself in the sections below. The
          text below will be long-form and written like a story. For ease of
          navigation, you can jump to each section using the links below:
        </p>
        <ul>
          <li><a href="#How-I-got-here">How I got here</a></li>
          <li><a href="#What-I-do">What I do</a></li>
          <li><a href="#Philosophy">Philosophy</a></li>
          <li><a href="#Interests-and-hobbies">Interests & hobbies</a></li>
          <li><a href="#Where-next">Where next?</a></li>
        </ul>
        <h2 id="How-I-got-here">How I got here</h2>
        <h3>The beginning</h3>
        <p>
          My first foray into coding was when I was twelve. With the help of
          YouTube videos and some free time during the holidays, I managed to
          put together a simple text-based Python number guessing game. During
          that time, I also discovered how to make a functioning die using
          Microsoft Excel that was installed on the home computer.
        </p>
        <figure>
          <img
            src="../assets/images/about-me--excel.jpg"
            alt="A program containing a die and a button to roll the dice in Excel."
            class="img-bordered"
          />
          <figcaption>I still remember how to do it till today.</figcaption>
        </figure>
        <p>
          I was proud to show what I have created to my friends and family. And
          I was also inspired by what I could build next.
        </p>
        <p>
          Inadvertently, I had learnt the basics of algorithmic thinking, and
          even software design concepts like encapsulation and abstraction.
        </p>
        <h3>Pursuing my interests</h3>
        <p>
          During high school, I got to learn more about programming, such as the
          fundamentals of object-oriented programming and writing clean code. I
          also took the initiative to try out desktop app development with
          JavaFX, Android app development, and cross-platform development with
          Flutter.
        </p>
        <figure>
          <img
            src="../assets/images/about-me--vitary-email.jpg"
            alt="An email of a teacher commending me for creating a hospital management app using JavaFX."
            class="img-bordered"
          />
          <figcaption>
            I built a hospital management desktop app for a school contest using
            JavaFX in 2020 and won the contest!
          </figcaption>
        </figure>
        <p>
          As I got more comfortable with coding, I also started to refine my
          design skills. This allowed me to be able to convey the
          functionalities of my app more effectively, as well as to make my app
          easier and more enjoyable to use.
        </p>
        <p>
          I'm always excited to hop into workshops, courses, or programmes about
          coding or design to meet new people and gain new insights into these
          fields. For example, I signed up for a five-day workshop on AI and
          satellites organised by the Defence Science and Technology Agency
          (DSTA) in June 2021 to learn more about AI.
        </p>
        <p>
          My teammates and I emerged as champions out of thirteen other IP
          schools!
        </p>
        <figure>
          <img
            src="../assets/images/about-me--dsta-poster.jpg"
            alt="My team's research poster for the workshop contest."
            class="img-bordered"
          />
          <figcaption>
            My team's final poster details how we used a convolutional neural
            network to analyse satellite images of ships for maritime security.
          </figcaption>
        </figure>
        <p>
          I also participated in
          <a
            href="https://engineeringgood.org/assistive-tech/t4g-home/"
            target="_blank"
            rel="noopener"
            >Tech For Good 2021</a
          >, a six-month-long innovation challenge where finalists iterate and
          design assistive technology based on real problem statements written
          by various organisations in Singapore. This is where
          <router-link :to="{ name: 'Project story Mint' }"
            >my team and I created Mint</router-link
          >.
        </p>
        <figure>
          <img
            src="../assets/images/about-me--t4g-booth.jpg"
            alt="The booth to showcase Mint at a virtual festival on a virtual meeting platform."
          />
          <figcaption>
            Due to Covid-19, the final demo day and festival was held online.
            This activity opened my eyes to the need for assistive technology in
            Singapore.
          </figcaption>
        </figure>
        <h2 id="What-I-do">What I do</h2>
        <p>I mainly focus on these three aspects of software development:</p>
        <ul>
          <li><a href="#Front-end-development">Front-end development</a></li>
          <li><a href="#UX-design">UX design</a></li>
          <li><a href="#UI-design">UI design</a></li>
        </ul>
        <h3 id="Front-end-development">Front-end development</h3>
        <p>
          I love front-end development as it allows me to immediately see the
          effects of the code I write. I also do more front-end development as I
          mostly create educational or informational websites and apps.
        </p>
        <p>A non-exhaustive list of products I've developed:</p>
        <ul>
          <li>
            A web app that enables trainees with mild intellectual disability to
            learn work skills independently. (<router-link
              :to="{ name: 'Project story Mint' }"
              >Learn more about Mint</router-link
            >.)
          </li>
          <li>
            A website that organises NUS High School's modules to act as a
            reference for my peers.
          </li>
          <li>
            An interactive virtual reality simulation to spread awareness of
            cataracts and glaucoma.
          </li>
        </ul>
        <figure>
          <img
            src="../assets/images/about-me--nush-modules-3.jpg"
            alt="The overview page of a NUS High module reference website I created."
          />
          <figcaption>
            Students were encouraged to learn something new over the holidays. I
            was awarded the most impressive presentation in my class for
            learning how to develop a module reference website.
          </figcaption>
        </figure>
        <h3 id="UX-design">UX design</h3>
        <p>
          I always prioritise UX (user experience) when developing products. I
          believe that designing products that are easy to use for all users—no
          matter whether they have colour blindness or are using their device
          one-handed—is one of the most crucial aspects of software development.
          Hence, I always test that my product provides a great experience for
          users in various scenarios.
        </p>
        <p>
          <i
            >After all, even if you have a lot of functionality in an app, users
            are simply going to leave if they are frustrated or confused.</i
          >
        </p>
        <p>Two things that I focus on:</p>
        <ul>
          <li>
            <b>Accessibility</b> — developing products to be as accessible as
            possible no matter a user's physical and cognitive abilities.
          </li>
          <li>
            <b>Affordances</b> — ensuring users know what UI elements do, and
            where to find them.
          </li>
        </ul>
        <figure>
          <img
            src="../assets/images/about-me--mint-accessibility.jpg"
            alt="A summary slide of the accessibility considerations of Mint."
            class="img-bordered"
          />
          <figcaption>
            The accessibility considerations I took when designing
            <router-link :to="{ name: 'Project story Mint' }">Mint</router-link
            >.
          </figcaption>
        </figure>
        <h3 id="UI-design">UI design</h3>
        <p>
          Of course, for a product to be delightful to use, it has to be
          <em>aesthetic!</em> With UI (user interface) design, I spend time
          scrutinising colour pairings and layout to achieve the desired vibe of
          the product.
        </p>
        <figure>
          <img
            src="../assets/images/about-me--chess-clock.jpg"
            alt="A design concept for a chess clock app with bold colors and large shapes."
          />
          <figcaption>
            I made this chess clock app design concept, experimenting with
            Google's
            <a href="https://m3.material.io" target="_blank" rel="noopener"
              >new Material You guidelines</a
            >
            for shape and colour.
          </figcaption>
        </figure>
        <h2 id="Philosophy">Philosophy</h2>
        <p>
          A guiding principle that I abide by is to
          <strong
            ><i>develop products according to the needs of users</i></strong
          >. (Aka <i>user-centred design</i>.)
        </p>
        <p>
          Some of the failures from my early endeavours in software development
          stem from creating products based on ideas that are not in line with
          real-world needs or problems. That posed a great deal of trouble
          because there was no real drive to accomplish the product, and there
          was no one that would actually use the product.
        </p>
        <p>
          Since then, I have taken note to design products around problems that
          I directly observe around me. Hence, most of the projects that I
          embark on revolve around education, information, or my interests and
          hobbies.
        </p>
        <h2 id="Interests-and-hobbies">Interests & hobbies</h2>
        <p>Some fun activities I do in my free time!</p>
        <h3>Language learning</h3>
        <p>
          Aside from coding and designing, you can probably find me learning
          languages (spoken ones).
        </p>
        <p>Languages that I'm comfortable with:</p>
        <ul>
          <li>English (Native proficiency)</li>
          <li>Chinese (Professional proficiency)</li>
          <li>Japanese (Limited working proficiency)</li>
          <li>French (Elementary proficiency)</li>
        </ul>
        <p>
          One of the languages that I am actively pursuing is the Japanese
          language. I took four years of formal education in the Japanese
          language as a third language as an elective module in high school.
        </p>
        <p>
          Here's me receiving a certificate and prize vouchers for placing
          second in the finals of the national
          <a
            href="https://www.jas.org.sg/en/event/the-japanese-speech-contest-2021-report"
            target="_blank"
            rel="noopener"
            >Japanese Speech Contest 2021</a
          >:
        </p>
        <figure>
          <img
            src="../assets/images/about-me--speech-contest.jpg"
            alt="I stand on the auditorium stage holding my certificate and prize vouchers."
            class="img-bordered"
          />
          <figcaption>
            I gave a 4-minute oral presentation in Japanese on the importance
            and benefits of listening to other people's life stories; giving a
            speech was nerve-wracking.
          </figcaption>
        </figure>
        <p>
          Language learning allows me to access a wider range of written works
          and videos on the internet, as well as to communicate with a greater
          proportion of the world. It also allows me to unlock a range of new
          perspectives and opinions that can't be translated. That's why I find
          language learning so fulfilling.
        </p>
        <h3>Contributing to open-source projects</h3>
        <p>
          If you
          <a
            href="https://github.com/cervonwong/"
            target="_blank"
            rel="noopener"
            >visit my GitHub profile</a
          >, you'd realise that I am quite active on there. Another one of my
          hobbies is contributing to issues and documentation on GitHub,
          depending on what I'm working on at the moment.
        </p>
        <p>
          Most of the technologies that I am learning and using are open-source
          projects.
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/flutter/flutter"
              target="_blank"
              rel="noopener"
            >
              Flutter</a
            >
            by Google
          </li>
          <li>
            <a
              href="https://github.com/vuejs/vue-next"
              target="_blank"
              rel="noopener"
              >Vue.js</a
            >
            — the framework used to build this site.
          </li>
          <li>
            <a
              href="https://github.com/googlefonts/dm-fonts"
              target="_blank"
              rel="noopener"
              >DM Sans</a
            >
            — the typeface that you are reading in right now!
          </li>
        </ul>
        <p>
          Interacting with developers who are actively involved in these
          technologies is instrumental in accelerating my developer journey.
          Contributing to open-source projects allows me to make these projects
          that I love using even better.
        </p>
        <h2 id="Where-next">Where next?</h2>
        <p>
          I'm currently looking to expand my horizons in various aspects of
          computer science and design by undertaking internships or attending
          courses and workshops.
        </p>
        <p>
          I'm continuously learning more about technologies that I find
          interesting and want to use. Here are some interesting things that I'm
          planning to check out in the future:
        </p>
        <ul>
          <li>
            <a
              href="https://developer.android.com/jetpack/compose"
              target="_blank"
              rel="noopener"
              >Jetpack Compose</a
            >
          </li>
          <li>Server-side rendering for this website</li>
        </ul>
        <p>
          I'm also working on some <em>secret</em> projects that I
          <em>may or may not</em> write about in
          <router-link :to="{ name: 'Blog catalog' }">my blog</router-link>.
        </p>
        <p>
          You can find my contact details on
          <router-link :to="{ name: 'Contact' }">my contact page</router-link>.
        </p>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/shared/Footer.vue";

export default defineComponent({
  name: "AboutMe",
  components: { Footer },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/global";

main {
  @include layout--push-footer;
}

.margin-wrapper {
  @include layout--main-margin-horz-normal;
  @include layout--main-margin-top-normal;
  @include layout--main-margin-bottom-normal;
}

.line-length-limit-wrapper {
  @include p--16;
  @include layout--limit-chars-per-line($line-char-limit--75);
}

h2 {
  @include h2--writing;
}

h3 {
  @include h3--writing;
}

img {
  margin-bottom: 0.5rem;
}

img.img-bordered {
  border: $border-width solid $border-silver;
}

figcaption {
  @include p--14;
  color: $secondary-black;
  font-style: italic;
}
</style>
