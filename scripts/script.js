const params = new URL(window.location.href).searchParams;
const uname = `${params.get("uname")}`; // This will ensure it's a string. If it's null, it will be "null"
const users = new Map();

const templateElements = {};

["name", "intro_text", "intro_pic", "career_text", "career_pic", "skills_inner",
"contact_email", "contact_github", "contact_facebook", "contact_discord", "sites"].forEach((item) => {
    templateElements[item] = document.getElementById(item);
});

class Contacts{
    constructor(email, github, facebook, discord){
        this.email = email;
        this.github = github;
        this.facebook = facebook;
        this.discord = discord;
        
    }
}
class Skill{
    constructor(name, level){
        this.name = name;
        this.level = level;
    }
}

function putInfo(uname, name, introText, introPic, careerText, careerPic, skills, contacts){
    const info = {};

    info.name = name;
    info.introText = introText;
    info.introPic = introPic;
    info.careerText = careerText;
    info.careerPic = careerPic;
    info.skills = skills;
    info.contacts = contacts;

    users.set(uname, info);

}

function useInfo(info) {
    templateElements.name.innerText = info.name;
    templateElements.intro_text.innerText = info.introText;
    templateElements.career_text.innerText = info.careerText;

    templateElements.intro_pic.src = info.introPic;
    templateElements.career_pic.src = info.careerPic;

    templateElements.contact_email.href = info.contacts.email;
    templateElements.contact_github.href = info.contacts.github;
    templateElements.contact_facebook.href = info.contacts.facebook;
    // templateElements.contact_discord.href = info.contacts.discord;

    // fill skills
    info.skills.forEach((skill) => {
        const skillRoot = document.createElement("tr");

        let skillStars = "";
        for(let i=0; i<5; i++) {
            skillStars += skill.level > i ? "<img src=\"pics/star.svg\">" : "<img src=\"pics/dark_star.svg\">";

        }

        skillRoot.innerHTML = `<td>${skill.name}</td><td>${skillStars}</td>`;

        templateElements.skills_inner.appendChild(skillRoot);
    });

}

function createUserLinks() {
    users.forEach(({name}, uname) => {
        templateElements.sites.innerHTML += `<a href="index.html?uname=${uname}">${name}</a>`;

    })

}

putInfo("kocsisa", "Kocsis Ákos",
    "My name is Ákos Kocsis, and I have been deeply passionate about software development for nearly five years. My journey into coding was sparked by my long-standing interest in gaming, which played a significant role in shaping my desire to understand how complex systems work and how software can create immersive experiences. This passion for gaming translated into a broader fascination with technology, leading me to explore programming as a way to solve problems and build innovative solutions. During this time, I’ve gained proficiency in a variety of programming languages, particularly Python and Java, with a focus on both back-end and front-end development. Through the challenges I’ve faced, I’ve learned how to write clean, efficient code and approach complex problems creatively. As I continue to expand my expertise in software engineering, I am excited to apply these skills in innovative projects and further develop my career.", 
    "pics/alkos.jpg",
    "Over the course of my learning, I’ve been involved in multiple software development projects, each providing unique challenges and opportunities to refine my skills. I’ve developed applications in both Python and Java, working across a variety of use cases, from web development to data processing and automation. These experiences have not only honed my technical abilities but also taught me the importance of writing clean, scalable code that can be easily understood and maintained by other developers.",
    "pics/akos_career.jpg", [
        new Skill("java", 4),
        new Skill("python", 2),
        new Skill("javascript", 3),
        new Skill("react", 2),
        new Skill("English", 5),
        new Skill("German", 2),
        new Skill("html", 5),
        new Skill("css", 4),

        new Skill("Driving", 5),
    ],
    new Contacts("20d_kocsisa@nyirszikszi.hu", "https://github.com/AkosKocsis", "https://www.facebook.com/profile.php?id=100008255951272", "")

);
putInfo("molnard", "Molnár Dávid",
    "My name is Molnár Dávid, and I am passionate about programming and technology. I am currently studying Java, JavaScript, and Python, continually expanding my knowledge of software development. I have a strong foundation in C#, which I learned during elementary school, giving me a solid head start in my coding journey. My goal is to master multiple programming languages to become a versatile developer in the tech industry. Driven by a desire to solve problems efficiently, I strive to write clean, maintainable code. My learning process is hands-on, allowing me to build projects that reinforce my technical skills.",
    "pics/divad.jpg",
    " I have a natural curiosity that pushes me to explore new frameworks, libraries, and tools. I believe in continuous improvement, always refining my coding techniques to stay up-to-date with industry standards. Collaboration is important to me, and I enjoy working with others to create innovative and effective software solutions. Ultimately, my ambition is to contribute to meaningful projects that leverage my skills and positively impact the world.",
    "pics/divad_career.jpg", [
        new Skill("java", 4),
        new Skill("python", 2),
        new Skill("javascript", 3),
        new Skill("react", 2),
        new Skill("English", 5),
        new Skill("German", 0),
        new Skill("html", 5),
        new Skill("css", 4),
        new Skill("C#", 2),

        new Skill("Driving", 5),
    ],
    new Contacts("20d_molnard@nyirszkszi.hu", "https://github.com/mdavid05", "https://www.facebook.com/david.molnar.336333", "")

);
putInfo("bieleczkig", "Kolega",
    "Hi, I'm Bieleczki Gergő Péter and I am an IT student. I have studied many programming languages, for example, Java, Python, Javascript and C. I've used frameworks such as Node.js, Express.js, and some openai libraries in Python. I'm always learning new stuff, so It's not a problem if I have to. I have a good sense for math and functional programming too. I'm also in the local robotics team, RobotTÉP. My goal is to acquire as much knowledge as possible, so that I could make something that a lot of people will benefit from one day.",
    "pics/akolega.jpeg",
    "One of my greatest projects yet, is a home helper robot, designed for people with disabilities. It was made for the \"At home\" competition held in in 2024 march. The task was to make a robot that would be controlled by voice commands, is self driving, self navigating and also has machine wision and an arm for picking stuff up. The competition, however, was not held, because no one else came. I can't retry on junior league, as I'm now over 18, but I may retry in the adult league.",
    "pics/robot.jpg", [
        new Skill("java", 4),
        new Skill("Git", 3),
        new Skill("Python", 4),
        new Skill("Node.js", 4),
        new Skill("Express.js", 4),
        new Skill("Javascript", 4),
        new Skill("English", 5),
        new Skill("Japanese", 2),
        new Skill("C", 3),
        new Skill("Math", 4),
        new Skill("React", 3),
        new Skill("IT security", 2),
        new Skill("Electronics", 2),
        new Skill("Embedded systems programming", 3),
        new Skill("Robotics", 2),
        new Skill("Physics", 3),
        new Skill("3D modeling", 2),
        new Skill("Vectorgraphic design", 3),
        new Skill("Networking", 3),
        new Skill("Chip design", 3),
        
        new Skill("Driving", 1),
        new Skill("Making up random ideas", 5),
        new Skill("Breathing", 3),
        new Skill("Being present", 3),
        new Skill("Getting sponsors", 1),
        new Skill("Talking", 2),
        new Skill("Chess", 2),
        new Skill("Finding shortcuts", 5),
        new Skill("Collecting scars", 5),
        new Skill("Making cocktails", 0)
    ],
    new Contacts("20d_bieleczkig@nyirszikszi.hu", "https://github.com/bieleczkig", "https://www.facebook.com/gergo.bieleczki.1", "")
    
);

createUserLinks();

const currentUser = users.get(uname);

if( undefined == currentUser ) {
    useInfo(users.entries().next().value[1]);

} else {
    useInfo(currentUser);
    
}
