
    let question = document.getElementById('question');
    let questionNum = document.getElementById('question-number');
    let choices = document.getElementsByClassName('choice-btn');
    let reloadBtn = document.getElementById("reload");
    reloadBtn.addEventListener('click',reload);
    let levels = document.getElementsByClassName('level');
    for (var i=0; i < levels.length; i++) {;
            levels[i].addEventListener('click',selectLevel);
        }
    var questionNumber = 0;
    for (var i=0; i < choices.length; i++) {;
            choices[i].addEventListener('click',checkAnswer);
        }
    let questions;
    let easy = [
        {
            question: 'Anastasia Steele first appears in which risqué 2011 novel by E.L. James?',
            choice1: 'Fifty Shades Freed',
            choice2: 'Fifty Shades of Grey',
            choice3: 'Freed: Fifty Shades Freed as Told by Christian',
            choice4: 'The Mister',
            answer: 'Fifty Shades of Grey',
        },
        {
            question: 'What is the second Harry Potter book called?',
            choice1: 'Harry Potter and the Half-Blood Prince',
            choice2: 'Harry Potter & The Chamber of Secrets',
            choice3: 'Harry Potter and the Goblet of Fire',
            choice4: 'Harry Potter and the Philosopher’s Stone',
            answer: 'Harry Potter & The Chamber of Secrets',
        },
        {
            question: 'In The Hobbit, what sort of creature is Smaug?',
            choice1: 'Gollum',
            choice2: 'Trolls',
            choice3: 'Dragon',
            choice4: 'Necromancer',
            answer: 'Dragon',
        },
        {
            question: 'Which Dickens character says “Please, Sir, I want some more”',
            choice1: 'Oliver Twist',
            choice2: 'Badger Bayham',
            choice3: 'Bamber Jack',
            choice4: 'Dartle Rosa',
            answer: 'Oliver Twist',
        },
        {
            question: 'Which author created Tom Sawyer and Huckleberry Finn?',
            choice1: 'Cuttle Captain',
            choice2: 'Hexam Gaffer',
            choice3: 'Mark Twain',
            choice4: 'Longford Edmund',
            answer: 'Mark Twain',
        },
        {
            question: 'Which Jules Vern character travelled around the world with Passe Partout?',
            choice1: 'Professor Lidenbrock ',
            choice2: 'Phileas Fogg',
            choice3: 'Robur (Robur the Conqueror)',
            choice4: 'Mathias Sandorf ',
            answer: 'Phileas Fogg',
        },
        {
            question: 'To which kingdom of living things do the Triffids, who take over the Earth in a famous John Wyndham novel, belong?',
            choice1: 'Earth',
            choice2: 'Water',
            choice3: 'Animals',
            choice4: 'Plants',
            answer: 'Plants',
        },
        {
            question: 'In which 18th century novel does the protagonist eventually marry Mr. Rochester?',
            choice1: 'Daniel Defoe',
            choice2: 'Gulliver’s Travels',
            choice3: 'Henry Fielding',
            choice4: 'Jane Eyre',
            answer: 'Jane Eyre',
        },
        {
            question: 'Which prolific US author wrote It, The Shining and Misery?',
            choice1: 'Stephen King',
            choice2: 'Charles Hamilton',
            choice3: 'Stephen King',
            choice4: 'Corín Tellado',
            answer: 'Stephen King',
        },
        {
            question: 'Who was Bertie Wooster’s valet in the series of P.G. Wodehouse stories?',
            choice1: 'Lady Constance Keeble,',
            choice2: 'Jeeves',
            choice3: 'Lady Julia Fish',
            choice4: 'Lady Hermione Wedge',
            answer: 'Jeeves',
        },
    ];
    let medium =[
        {
            question: 'Which author wrote the 1960 novel To Kill a Mockingbird?',
            choice1: 'Arthur Hailey',
            choice2: 'Allen Drury',
            choice3: 'Harper Lee',
            choice4: "Edwin O'Connor",
            answer: 'Harper Lee',
        },
        {
            question: 'Which book won the 2020 Pulitzer Prize in the fiction category?',
            choice1: 'The Overstory',
            choice2: 'The Nickel Boys',
            choice3: 'The Underground Railroad',
            choice4: 'The Goldfinch',
            answer: 'The Nickel Boys',
        },
        {
            question: 'Alice in Wonderland was written under the pen name of Lewis Carol. What was the author’s real name?',
            choice1: 'Charles Dodgson',
            choice2: 'Eric Peterson',
            choice3: 'Charlie Dane',
            choice4: 'Daniel Peters',
            answer: 'Charles Dodgson',
        },
        {
            question: 'Harry Potter and the Philosopher’s Stone, the first book in the Harry Potter series, goes by which name in the USA?',
            choice1: 'Harry Potter and the Magical Feast',
            choice2: "Harry Potter and the Emperor's Gem",
            choice3: "Harry Potter and the Sorcerer's Ston",
            choice4: "Harry Potter and the Wizard's Secret",
            answer: "Harry Potter and the Sorcerer's Stone",
        },
        {
            question: 'In which language was the first book in Steig Larsson’s Millennium series, The Girl with the Dragon Tattoo, published?',
            choice1: 'English',
            choice2: 'Swedish',
            choice3: 'Finnish',
            choice4: 'Danish',
            answer: 'Swedish',
        },
        {
            question: 'What is the name of the second volume in the series The Lord of the Rings?',
            choice1: 'The Two Towers',
            choice2: 'The Hobbit',
            choice3: 'The Return of the King',
            choice4: 'The Fellowship of the Ring',
            answer: 'The Two Towers',
        },
        {
            question: 'What Stephen King book was published first?',
            choice1: 'The Dark Tower',
            choice2: 'Christine',
            choice3: 'Insonomia',
            choice4: 'Carrie',
            answer: 'Carrie',
        },
        {
            question: 'Which of these books was not written by George Orwell?',
            choice1: 'Animal Farm',
            choice2: '1984',
            choice3: 'Brave New World',
            choice4: 'Coming Up for Air',
            answer: 'Brave New World',
        },
        {
            question: 'What was the working title of Jane Austin’s Pride and Prejudice?',
            choice1: 'Dangerous Liaisons',
            choice2: 'Judgment and Clarity',
            choice3: 'First Impressions',
            choice4: "There's Always Tomorrow",
            answer: 'First Impressions',
        },
        {
            question: 'Where is Charles Dickens said to have found inspiration for A Christmas Carol protagonist Ebeneezer Scrooge?',
            choice1: 'A friend',
            choice2: 'A gravestone',
            choice3: 'A newspaper',
            choice4: 'A dream',
            answer: 'A gravestone',
        },
    ];
    let hard =  [
        {
            question: 'Who won the Booker Prize in 2009 and again in 2012?',
            choice1: 'Hilary Mantel',
            choice2: 'Badger Bayham',
            choice3: 'Bamber Jack',
            choice4: 'Dartle Rosa',
            answer: 'Hilary Mantel',
        },
        {
            question: 'What item does Antonio leave in Cephalonia with Pelagia in a 1993 novel?',
            choice1: 'Harry Potter and the Half-Blood Prince',
            choice2: 'Harry Potter & The Chamber of Secrets',
            choice3: 'Harry Potter and the Goblet of Fire',
            choice4: 'His mandolin',
            answer: 'His mandolin',
        },
        {
            question: 'Piscine Molitor Patel and Richard Parker are the main characters in which novel?',
            choice1: 'Gollum',
            choice2: 'Life of Pi',
            choice3: 'Dragon',
            choice4: 'Necromancer',
            answer: 'Life of Pi',
        },
        {
            question: 'The premise for which novel is a high school massacre perpetrated by Jesus Navarro, the title character’s best friend?',
            choice1: 'Oliver Twist',
            choice2: 'Vernon God Little',
            choice3: 'Bamber Jack',
            choice4: 'Dartle Rosa',
            answer: 'Vernon God Little',
        },
        {
            question: 'Who wrote A Thousand Splendid Suns and The Kite Thief?',
            choice1: 'Khaled Hosseini',
            choice2: 'Hexam Gaffer',
            choice3: 'Mark Twain',
            choice4: 'Longford Edmund',
            answer: 'Khaled Hosseini',
        },
        {
            question: 'Which novel, named for the outfit of one of the protagonists, describes the friendship of Bruno and Shmuel?',
            choice1: 'Professor Lidenbrock ',
            choice2: 'Phileas Fogg',
            choice3: 'The Boy in the Striped Pyjamas',
            choice4: 'Mathias Sandorf ',
            answer: 'The Boy in the Striped Pyjamas',
        },
        {
            question: 'What is the three-word title of Bernadine Evaristo’s 2019 Booker Prize-winning novel about the lives of 12 characters, mostly black women?',
            choice1: 'Earth',
            choice2: 'Water',
            choice3: 'Animals',
            choice4: 'Girl, Woman, Other',
            answer: 'Girl, Woman, Other',
        },
        {
            question: 'Who wrote No Country for Old Men and The Road?',
            choice1: 'Daniel Defoe',
            choice2: 'Cormac McCarthy',
            choice3: 'Henry Fielding',
            choice4: 'Jane Eyre',
            answer: 'Cormac McCarthy',
        },
        {
            question: 'Whose 1988 novel led to Ayatollah Khomeini issuing a fatwa calling for his death?',
            choice1: 'Salman Rushdie',
            choice2: 'Charles Hamilton',
            choice3: 'Stephen King',
            choice4: 'Corín Tellado',
            answer: 'Salman Rushdie',
        },
        {
            question: 'Which Kazuo Ishiguro novel is set in a dystopian alternate England where humans are cloned to be organ donors?',
            choice1: 'Lady Constance Keeble,',
            choice2: 'Jeeves',
            choice3: 'Never Let Me Go',
            choice4: 'Lady Hermione Wedge',
            answer: 'Never Let Me Go',
        },
    ]
    /**
     *  reload the first part with three options to select level of quiz
     */ 
    function reload(event){
        event.preventDefault();
        var lDiv = document.getElementById("first");
        var sDiv = document.getElementById("score-div");
        sDiv.style.display = 'none';
        lDiv.style.display = 'flex';
        var pyro = document.getElementById("pyro");
        pyro.classList.remove("pyro");
        
    }
    /**
     *  selects the level of questions and put the questions in questions variable
     *  show the question part and run the quiz
     */ 
    function selectLevel(event){
        event.preventDefault();

        var lDiv = document.getElementById("first");
        var qDiv = document.getElementById("questions");
        qDiv.style.display = 'flex';
        lDiv.style.display = 'none';
        if(event.target.innerText == 'Easy')
            questions = easy
        else if(event.target.innerText == "Medium")
            questions = medium;
        else 
            questions = hard;
        runQuiz();
    }
    /**
     * set score and question number to 0 and load question
     */ 
    function runQuiz()  {
        let score = document.getElementById('score');
        score.innerHTML = 0;
        questionNumber = 0;
        loadNewQuestion();
    };
    /**
     * load new question in screen
     *  */
    function loadNewQuestion() {
        if( questionNumber >= questions.length) {
            showScore();
        }
        else{
            question.innerText = questions[questionNumber].question;
            questionNum.innerText = questionNumber+1 +'. ';
            
            for (var i=0; i < choices.length; i++) {;
                choices[i].innerText = questions[questionNumber]['choice' + (i+1)];
            }
        }
    }
    /**
     * checkes the answer and load next question
     *  */
    function checkAnswer(event){
        event.preventDefault();

        let selectedChoice = event.target.innerText; 
        let score = document.getElementById('score');
        let className = questions[questionNumber].answer === selectedChoice? 'correct': 'wrong';
        score.innerHTML = questions[questionNumber].answer === selectedChoice? parseInt(score.innerText) + 1: parseInt(score.innerText);
        event.target.classList.add(className);
        setTimeout(() => {
            event.target.classList.remove(className);           
            questionNumber++;
            loadNewQuestion();

        }, 700);
        

    }
    /**
     * after all questions shows the final score
     *  */
    function showScore(){
        let scoreElement = document.getElementById('score');
        let score = document.getElementById('score').innerText;
        if(parseInt(score)>= 6){
            scoreElement.innerHTML = "Congratulations! You got "+ score + " out of 10.";
            var pyro = document.getElementById("pyro");
            pyro.classList.add("pyro");
        }else {
            scoreElement.innerHTML = "Oops! You got "+ score + " out of 10.";

        }
        
        var qDiv = document.getElementById("questions");
        var sDiv = document.getElementById("score-div");
        qDiv.style.display = 'none';
        sDiv.style.display = 'flex';
    }
