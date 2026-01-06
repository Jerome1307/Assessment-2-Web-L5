// Imports MongoDB client
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

// Function to import data locally
async function data() {
    try {
    // Connects to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB for importing data');

    // Selects the database and collection
    const db = client.db('kpopGroups');
    const groups = db.collection('groups');

    // Clears any old data
    await groups.deleteMany({});

    // Inserts the data into the collection
    await groups.insertMany([
        {   
            // Illit group questions
            name: 'Illit',
            levels: {

                // Easy questions
                easy: [
                    { question: "Who is the Leader of Illit?", choices: ["Yunah", "Wonhee", "Minju", "Moka"], answer: "Yunah" },
                    { question: "Who is the Maknae of Illit?", choices: ["Iroha", "Minju", "Moka", "Wonhee"], answer: "Iroha" },
                    { question: "Who is the Main Vocalist of Illit?", choices: ["Iroha", "Moka", "Minju", "Yunah"], answer: "Minju" },
                    { question: "Who is the Center of Illit?", choices: ["Moka", "Yunah", "Wonhee", "Iroha"], answer: "Wonhee" },
                    { question: "Who is the Visual of Illit?", choices: ["Yunah", "Minju", "Moka", "Wonhee"], answer: "Moka" },
                    { question: "What is the Nationality of Iroha?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Japanese" },
                    { question: "What is the Nationality of Moka?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Japanese" },
                    { question: "What is the Nationality of Minju?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Korean" },
                    { question: "What is the Nationality of Yunah?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Korean" },
                    { question: "What is the Nationality of Wonhee?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Korean" },
                    { question: "How many members are there on Illit?", choices: ["4", "5", "6", "8"], answer: "5" },
                    { question: "What year did Illit debut?", choices: ["2025", "2023", "2022", "2024"], answer: "2024" },
                    { question: "Which Entertainment manages Illit?", choices: ["HYBE", "FNF", "SM", "YG"], answer: "HYBE" },
                    { question: "How many Japanese members are in the group?", choices: ["0", "1", "2", "3"], answer: "2" },
                    { question: "How many Korean members are in the group?", choices: ["0", "1", "2", "3"], answer: "3" },
                    { question: "How many Filipino members are in the group?", choices: ["0", "1", "2", "3"], answer: "0" },
                    { question: "How many nationalities are there in Illit?", choices: ["0", "1", "2", "3"], answer: "2" },
                    { question: "What is the name of the title track of their first comeback?", choices: ["Lucky Girl Syndrome", "My World", "Cherish My Love", "Magnetic"], answer: "Cherish My Love" },
                    { question: "What is the name of the song Illit debuted with?", choices: ["Lucky Girl Syndrome", "My World", "Cherish My Love", "Magnetic"], answer: "Magnetic" }

                ],

                // Medium questions
                medium: [
                    { question: "When is the birthday of Yunah?", choices: ["January 15th", "June 8th", "July 13th", "December 9th"], answer: "January 15th" },
                    { question: "When is the birthday of Minju?", choices: ["February 3rd", "May 11th", "March 27th", "September 18th"], answer: "May 11th" },
                    { question: "When is the birthday of Moka?", choices: ["August 1st", "November 15th", "June 6th", "October 8th"], answer: "October 8th" },
                    { question: "When is the birthday of Wonhee?", choices: ["December 29th", "March 14th", "June 26th", "January 7th"], answer: "June 26th" },
                    { question: "When is the birthday of Iroha?", choices: ["February 4th", "May 17th", "April 23rd", "August 22nd"], answer: "February 4th" },
                    { question: "What survival show formed Illit?", choices: ["Produce 48", "I-land 2", "Universe Ticket", "R U NEXT?"], answer: "R U NEXT?" },
                    { question: "What is the name of their Fandom?", choices: ["Illies", "Dreamies", "Gllit", "Illuminates"], answer: "Gllit" },
                    { question: "Who was a previous member of Illit?", choices: ["Sunwoo", "Jiwoo", "Youngseo", "None"], answer: "Youngseo" },
                    { question: "What place did Yunah get on R U NEXT?", choices: ["1st", "3rd", "5th", "6th"], answer: "5th" },
                    { question: "What place did Minju get on R U NEXT?", choices: ["3rd", "4th", "6th", "2nd"], answer: "3rd" },
                    { question: "What place did Moka get on R U NEXT?", choices: ["3rd", "1st", "2nd", "6th"], answer: "6th" },
                    { question: "What place did Wonhee get on R U NEXT?", choices: ["2nd", "3rd", "1st", "5th"], answer: "1st" },
                    { question: "What place did Iroha get on R U NEXT?", choices: ["1st", "4th", "5th", "3rd"], answer: "4th" },
                    { question: "How many episodes did R U NEXT? air for?", choices: ["8", "10", "12", "14"], answer: "10" },
                    { question: "What is the name of their debut album?", choices: ["SUPER REAL ME", "I'll Like You", "Bomb", "Not Cute Anymore"], answer: "SUPER REAL ME" },
                    { question: "When was the debut date of Illit?", choices: ["February 14th", "March 25th", "March 3rd", "April 29th"], answer: "March 25th" }
                ],

                // Hard questions
                hard: [
                    { question: "Who is this person?", image: "/images/Illit/Minju.jpg", choices: ["Yunah", "Wonhee", "Moka", "Minju"], answer: "Minju" },
                    { question: "Who is this person?", image: "/images/Illit/Moka.jpg", choices: ["Minju", "Iroha", "Yunah", "Moka"], answer: "Moka" },
                    { question: "Who is this person?", image: "/images/Illit/Iroha.jpg", choices: ["Wonhee", "Minju", "Iroha", "Yunah"], answer: "Iroha" },
                    { question: "Who is this person?", image: "/images/Illit/Yunah.jpg", choices: ["Moka", "Yunah", "Wonhee", "Iroha"], answer: "Yunah" },
                    { question: "Who is this person?", image: "/images/Illit/Wonhee.jpg", choices: ["Iroha", "Moka", "Minju", "Wonhee"], answer: "Wonhee" },
                    { question: "What is Yunah's MBTI?", choices: ["ESTP", "INTP", "ENTP", "ESFP"], answer: "ENTP" },
                    { question: "What is Minju's MBTI?", choices: ["ISTJ", "ENFP", "ISFP", "ISTP"], answer: "ISTP" },
                    { question: "What is Moka's MBTI?", choices: ["ISFP", "ENTJ", "INTJ", "ISTP"], answer: "ISFP" },
                    { question: "What is Wonhee's MBTI?", choices: ["ESTP", "ISFP", "ENTJ", "ISTP"], answer: "ISFP" },
                    { question: "What is Iroha's MBTI?", choices: ["ENJP", "INFJ", "ESTP", "ISFP"], answer: "INFJ" },
                    { question: "What is the Representative Emoji of Yunah?", choices: ["Cheetah", "Lion", "Bunny", "Dog"], answer: "Cheetah" },
                    { question: "What is the Representative Emoji of Minju?", choices: ["Hamster", "Bunny", "Cat", "Dog"], answer: "Bunny" },
                    { question: "What is the Representative Emoji of Moka?", choices: ["Cat", "Coffee", "Bread", "Dog"], answer: "Coffee" },
                    { question: "What is the Representative Emoji of Wonhee?", choices: ["Squirrel", "Hamster", "Turtle", "Dog"], answer: "Squirrel" },
                    { question: "What is the Representative Emoji of Iroha?", choices: ["Cheetah", "Turtle", "Bunny", "Dog"], answer: "Turtle" },
                    { question: "What is the Ship name of Yunah and Minju", choices: ["Moheetoz", "Cheetoz", "Heeroz", "Mimoz"], answer: "Cheetoz" },
                    { question: "What is the Ship name of Moka and Minju", choices: ["Mimoz", "Mokarongz", "Moheetoz", "Heeroz"], answer: "Mimoz" },
                    { question: "What is the Ship name of Iroha and Moka", choices: ["Cheetoz", "Moheetoz", "Mimoz", "Mokarongz"], answer: "Mokarongz" },
                    { question: "What is the Ship name of Wonhee and Moka", choices: ["Mokarongz", "Mimoz", "Moheetoz", "Cheetoz"], answer: "Moheetoz" },
                    { question: "What is the Ship name of Wonhee and Iroha", choices: ["Mokarongz", "Heeroz", "Cheetoz", "Mimoz"], answer: "Heeroz" }
                ]
            }
        },
        {   
            // Unis group questions
            name: 'Unis',
            levels: {

                // Easy questions
                easy: [
                    { question: "Who is the Leader of Unis?", choices: ["Nana", "Hyeonju", "Gehlee", "Yunha"], answer: "Hyeonju" },
                    { question: "Who is the Maknae of Unis?", choices: ["Seowon", "Gehlee", "Yoona", "Kotoko"], answer: "Seowon" },
                    { question: "Who is the Main Vocalist of Unis?", choices: ["Yunha", "Yoona", "Elisia", "Hyeonju"], answer: "Elisia" },
                    { question: "Who is the Center of Unis?", choices: ["Nana", "Elisia", "Seowon", "Yunha"], answer: "Nana" },
                    { question: "Who is the Visual of Unis?", choices: ["Elisia", "Nana", "Kotoko", "Gehlee"], answer: "Gehlee" },
                    { question: "What is the Nationality of Nana?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Japanese" },
                    { question: "What is the Nationality of Kotoko?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Japanese" },
                    { question: "What is the Nationality of Hyeonju?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Korean" },
                    { question: "What is the Nationality of Yunha?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Korean" },
                    { question: "What is the Nationality of Seowon?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Korean" },
                    { question: "What is the Nationality of Yoona?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Korean" },
                    { question: "What is the Nationality of Elisia?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Filipino" },
                    { question: "What is the Nationality of Gehlee?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Filipino" },
                    { question: "How many members are there on Unis?", choices: ["5", "6", "8", "9"], answer: "8" },
                    { question: "What year did Unis debut?", choices: ["2025", "2023", "2022", "2024"], answer: "2024" },
                    { question: "Which Entertainment manages Unis?", choices: ["JYP", "FNF", "HYBE", "YG"], answer: "FNF" },
                    { question: "How many Japanese members are in the group?", choices: ["1", "2", "3", "4"], answer: "2" },
                    { question: "How many Korean members are in the group?", choices: ["1", "2", "3", "4"], answer: "4" },
                    { question: "How many Filipino members are in the group?", choices: ["1", "2", "3", "4"], answer: "2" },
                    { question: "How many nationalities are there in Unis?", choices: ["0", "1", "2", "3"], answer: "3" },
                    { question: "What is the name of the title track of their first comeback?", choices: ["Dream of Girls", "Dopamine", "Curious", "Super Woman"], answer: "Curious" },
                    { question: "What is the name of the song UNIS debuted with?", choices: ["Dream of Girls", "Dopamine", "Curious", "Super Woman"], answer: "Super Woman" }
                ],

                // Medium questions
                medium: [
                    { question: "When is the birthday of Hyeonju?", choices: ["November 3rd", "June 1st", "October 13th", "December 9th"], answer: "November 3rd" },
                    { question: "When is the birthday of Nana?", choices: ["January 23rd", "June 6th", "March 27th", "September 2nd"], answer: "June 6th" },
                    { question: "When is the birthday of Gehlee?", choices: ["August 1st", "November 10th", "August 19th", "September 4th"], answer: "August 19th" },
                    { question: "When is the birthday of Kotoko?", choices: ["December 31st", "March 8th", "June 24th", "October 28th"], answer: "October 28th" },
                    { question: "When is the birthday of Yunha?", choices: ["September 25th", "May 14th", "February 29th", "February 28th"], answer: "February 28th" },
                    { question: "When is the birthday of Elisia?", choices: ["August 30th", "March 18th", "April 18th", "May 16th"], answer: "April 18th" },
                    { question: "When is the birthday of Yoona?", choices: ["July 13th", "October 7th", "April 26th", "January 7th"], answer: "October 7th" },
                    { question: "When is the birthday of Seowon?", choices: ["January 27th", "December 17th", "May 23rd", "January 22nd"], answer: "January 27th" },
                    { question: "What survival show formed Unis?", choices: ["Universe League", "R U NEXT?", "Universe Ticket", "I-land 2"], answer: "Universe Ticket" },
                    { question: "What is the name of their Fandom?", choices: ["EverAfters", "Universes", "Sun&Moon", "Starlight"], answer: "EverAfters" },
                    { question: "Who was a previous member of Unis?", choices: ["Sieun", "Nizi", "Narumi", "None"], answer: "None" },
                    { question: "What place did Elisia get on Unis?", choices: ["1st", "3rd", "7th", "4th"], answer: "1st" },
                    { question: "What place did Yunha get on Unis?", choices: ["3rd", "2nd", "6th", "8th"], answer: "2nd" },
                    { question: "What place did Nana get on Unis?", choices: ["4th", "8th", "3rd", "6th"], answer: "3rd" },
                    { question: "What place did Gehlee get on Unis?", choices: ["3rd", "2nd", "8th", "4th"], answer: "4th" },
                    { question: "What place did Seowon get on Unis?", choices: ["7th", "3rd", "1st", "5th"], answer: "5th" },
                    { question: "What place did Yoona get on Unis?", choices: ["5th", "9th", "6th", "3rd"], answer: "6th" },
                    { question: "What place did Kotoko get on Unis?", choices: ["3rd", "7th", "5th", "2nd"], answer: "7th" },
                    { question: "What place did Hyeonju get on Unis?", choices: ["8th", "4th", "6th", "3rd"], answer: "8th" },
                    { question: "How many episodes did Universe Ticket air for?", choices: ["8", "10", "12", "14"], answer: "10" },
                    { question: "What is the name of their debut album?", choices: ["SWICY", "WE UNIS", "Curious", "See you in my dream"], answer: "WE UNIS" },
                    { question: "When was the debut date of Unis?", choices: ["February 28th", "March 25th", "March 27th", "January 3rd"], answer: "March 27th" }
                ],

                // Hard questions
                hard: [
                    { question: "Who is this person?", image: "/images/UNIS/Gehlee.jpg", choices: ["Yunha", "Kotoko", "Gehlee", "Hyeonju"], answer: "Gehlee" },
                    { question: "Who is this person?", image: "/images/UNIS/Elisia.jpg", choices: ["Nana", "Elisia", "Seowon", "Gehlee"], answer: "Elisia" },
                    { question: "Who is this person?", image: "/images/UNIS/Yoona.jpg", choices: ["Kotoko", "Yoona", "Hyeonju", "Yunha"], answer: "Yoona" },
                    { question: "Who is this person?", image: "/images/UNIS/Nana.jpg", choices: ["Elisia", "Yunha", "Kotoko", "Nana"], answer: "Nana" },
                    { question: "Who is this person?", image: "/images/UNIS/Hyeonju.jpg", choices: ["Hyeonju", "Gehlee", "Yoona", "Seowon"], answer: "Hyeonju" },
                    { question: "Who is this person?", image: "/images/UNIS/Seowon.jpg", choices: ["Gehlee", "Seowon", "Elisia", "Yoona"], answer: "Seowon" },
                    { question: "Who is this person?", image: "/images/UNIS/Yunha.jpg", choices: ["Seowon", "Nana", "Yunha", "Elisia"], answer: "Yunha" },
                    { question: "Who is this person?", image: "/images/UNIS/Kotoko.jpg", choices: ["Yoona", "Hyeonju", "Nana", "Kotoko"], answer: "Kotoko" },
                    { question: "What is Hyeonju's MBTI?", choices: ["ISTP", "INTP", "ISTJ", "ESFP"], answer: "ISTJ" },
                    { question: "What is Nana's MBTI?", choices: ["ESFP", "INTJ", "ENTJ", "ISTP"], answer: "ISTP" },
                    { question: "What is Gehlee's MBTI?", choices: ["INFP", "ENTJ", "ESTJ", "ISTP"], answer: "INFP" },
                    { question: "What is Kotoko's MBTI?", choices: ["ISTP", "INFP", "ISTJ", "INTP"], answer: "INTP" },
                    { question: "What is Yunha's MBTI?", choices: ["INJP", "ENFJ", "INTP", "ESFP"], answer: "INTP" },
                    { question: "What is Elisia's MBTI?", choices: ["ISFP", "ESTJ", "ESTP", "INTP"], answer: "ISFP" },
                    { question: "What is Yoona's MBTI?", choices: ["ENJP", "INFJ", "ESTP", "ENFP"], answer: "ENFP" },
                    { question: "What is Seowon's MBTI?", choices: ["ESTJ", "ENFJ", "ISTP", "ISFP"], answer: "ESTJ" },
                    { question: "What is the Representative Animals of Hyeonju?", choices: ["Cheetah", "Squirrel", "Bunny", "Turtle"], answer: "Squirrel" },
                    { question: "What is the Representative Animals of Nana?", choices: ["Deer", "Bunny", "Cat", "Hamster"], answer: "Cat" },
                    { question: "What is the Representative Animals of Gehlee?", choices: ["Cat", "Deer", "Bunny", "Dog"], answer: "Deer" },
                    { question: "What is the Representative Animals of Kotoko?", choices: ["Squirrel", "Hamster", "Turtle", "Dog"], answer: "Cat" },
                    { question: "What is the Representative Animals of Yunha?", choices: ["Fox", "Dog", "Frog", "Cat"], answer: "Fox" },
                    { question: "What is the Representative Animals of Elisia?", choices: ["Deer", "Dog", "Bunny", "Squirrel"], answer: "Bunny" },
                    { question: "What is the Representative Animals of Yoona?", choices: ["Cheetah", "Turtle", "Cat", "Frog"], answer: "Frog" },
                    { question: "What is the Representative Animals of Seowon?", choices: ["Cat", "Dog", "Bunny", "Hamster"], answer: "Hamster" },
                    { question: "What is the Ship name of Elisa and Yunha", choices: ["Bbangduz", "Eliwon", "Yootoko", "Nanalee"], answer: "Bbangduz" },
                    { question: "What is the Ship name of Nana and Gehlee", choices: ["Kotowon", "Nanalee", "Eliwon", "Yootoko"], answer: "Nanalee" },
                    { question: "What is the Ship name of Seowon and Elisia", choices: ["Cheetoz", "Kotowon", "Bbangduz", "Eliwon"], answer: "Eliwon" },
                    { question: "What is the Ship name of Kotoko and Seowon", choices: ["Yootoko", "Bbangduz", "HyeoYoon", "Kotowon"], answer: "Kotowon" },
                    { question: "What is the Ship name of Yoona and Hyeonju", choices: ["Kotowon", "Yootoko", "Nanalee", "HyeoYoon"], answer: "HyeoYoon" }
                ]
            }
        },
        {   
            // Ahof group questions
            name: 'Ahof',
            levels: {

                // Easy questions
                easy: [
                    { question: "Who is the Leader of AHOF?", choices: ["Han", "Steven", "Jeongwoo", "Woongki"], answer: "Steven" },
                    { question: "Who is the Maknae of AHOF?", choices: ["Shuaibo", "Chih-en", "Daisuke", "Juwon"], answer: "Daisuke" },
                    { question: "Who is the Main Vocalist of AHOF?", choices: ["Daisuke", "Juwon", "JL", "Han"], answer: "Han" },
                    { question: "Who is the Center of AHOF?", choices: ["Woongki", "Han", "Steven", "JL"], answer: "JL" },
                    { question: "Who is the Visual of AHOF?", choices: ["Shuaibo", "JL", "Chih-en", "Jeongwoo"], answer: "Jeongwoo" },
                    { question: "What is the Nationality of Shuaibo?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Chinese" },
                    { question: "What is the Nationality of Daisuke?", choices: ["Japanese", "Taiwanese", "Chinese", "Korean"], answer: "Japanese" },
                    { question: "What is the Nationality of Steven?", choices: ["Japanese", "Filipino", "Taiwanese", "Korean"], answer: "Korean" },
                    { question: "What is the Nationality of Jeongwoo?", choices: ["Japanese", "Taiwanese", "Chinese", "Korean"], answer: "Korean" },
                    { question: "What is the Nationality of Juwon?", choices: ["Japanese", "Filipino", "Taiwanese", "Korean"], answer: "Korean" },
                    { question: "What is the Nationality of Han?", choices: ["Japanese", "Taiwanese", "Chinese", "Korean"], answer: "Korean" },
                    { question: "What is the Nationality of Woongki?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Korean" },
                    { question: "What is the Nationality of Chih-en?", choices: ["Japanese", "Taiwanese", "Chinese", "Korean"], answer: "Taiwanese" },
                    { question: "What is the Nationality of JL?", choices: ["Japanese", "Filipino", "Chinese", "Korean"], answer: "Filipino" },
                    { question: "How many members are there on AHOF?", choices: ["5", "6", "8", "9"], answer: "9" },
                    { question: "What year did AHOF debut?", choices: ["2025", "2023", "2022", "2024"], answer: "2025" },
                    { question: "Which Entertainment manages AHOF?", choices: ["JYP", "FNF", "SM", "HYBE"], answer: "FNF" },
                    { question: "How many Japanese members are in the group?", choices: ["1", "2", "3", "4"], answer: "1" },
                    { question: "How many Korean members are in the group?", choices: ["2", "3", "4", "5"], answer: "5" },
                    { question: "How many Filipino members are in the group?", choices: ["1", "2", "3", "4"], answer: "1" },
                    { question: "How many Taiwanese members are in the group?", choices: ["1", "2", "3", "4"], answer: "1" },
                    { question: "How many Chinese members are in the group?", choices: ["1", "2", "3", "4"], answer: "1" },
                    { question: "How many nationalities are there in AHOF?", choices: ["1", "3", "4", "5"], answer: "5" },
                    { question: "What is the name of the title track of their first comeback?", choices: ["The Universe", "Incompleted", "Pinocchio", "Rendezvous"], answer: "Pinocchio" },
                    { question: "What is the name of the song AHOF debuted with?", choices: ["The Universe", "Incompleted", "Pinocchio", "Rendezvous"], answer: "Rendezvous" }
                ],

                // Medium questions
                medium: [
                    { question: "When is the birthday of Steven?", choices: ["January 17th", "July 12th", "December 13th", "February 9th"], answer: "January 17th" },
                    { question: "When is the birthday of Jeongwoo?", choices: ["July 3rd", "September 6th", "March 27th", "May 12th"], answer: "September 6th" },
                    { question: "When is the birthday of Woongki?", choices: ["August 3rd", "September 14th", "April 23rd", "October 11th"], answer: "April 23rd" },
                    { question: "When is the birthday of Shuaibo?", choices: ["December 16th", "March 19th", "June 27th", "July 2nd"], answer: "July 2nd" },
                    { question: "When is the birthday of Han?", choices: ["July 28th", "March 24th", "September 25th", "January 20th"], answer: "September 25th" },
                    { question: "When is the birthday of JL?", choices: ["August 15th", "April 21st", "May 3rd", "November 28th"], answer: "April 21st" },
                    { question: "When is the birthday of Chih-en?", choices: ["October 28th", "June 14th", "September 20th", "April 17th"], answer: "October 28th" },
                    { question: "When is the birthday of Juwon?", choices: ["March 29th", "July 24th", "November 21st", "May 7th"], answer: "July 24th" },
                    { question: "When is the birthday of Daisuke?", choices: ["February 14th", "August 1st", "December 25th", "December 22nd"], answer: "December 25th" },
                    { question: "What survival show formed AHOF?", choices: ["Universe League", "Universe Ticket", "R U NEXT?", "I-land"], answer: "Universe League" },
                    { question: "What is the name of their Fandom?", choices: ["All Time Hall of Famers", "FOHA", "Nameless", "ForeverNine"], answer: "FOHA" },
                    { question: "Who was a previous member of AHOF?", choices: ["Yuito", "Kenta", "Kaira", "None"], answer: "None" },
                    { question: "What place did JL get on AHOF?", choices: ["1st", "3rd", "7th", "4th"], answer: "1st" },
                    { question: "What place did Woongki get on AHOF?", choices: ["3rd", "2nd", "6th", "8th"], answer: "2nd" },
                    { question: "What place did Han get on AHOF?", choices: ["4th", "8th", "3rd", "9th"], answer: "3rd" },
                    { question: "What place did Steven get on AHOF?", choices: ["3rd", "2nd", "8th", "4th"], answer: "4th" },
                    { question: "What place did Shuaibo get on AHOF?", choices: ["7th", "3rd", "1st", "5th"], answer: "5th" },
                    { question: "What place did Juwon get on AHOF?", choices: ["5th", "9th", "6th", "3rd"], answer: "6th" },
                    { question: "What place did Jeongwoo get on AHOF?", choices: ["3rd", "7th", "9th", "2nd"], answer: "7th" },
                    { question: "What place did Chih-en get on AHOF?", choices: ["8th", "4th", "6th", "3rd"], answer: "8th" },
                    { question: "What place did Daisuke get on AHOF?", choices: ["9th", "4th", "6th", "3rd"], answer: "9th" },
                    { question: "How many episodes did Universe League air for?", choices: ["8", "10", "12", "14"], answer: "10" },
                    { question: "What is the name of their debut album?", choices: ["The Passage", "WHO WE ARE", "The Universe", "Ignition"], answer: "WHO WE ARE" },
                    { question: "When was the debut date of AHOF?", choices: ["July 13th", "March 3rd", "March 27th", "July 1st"], answer: "July 1st" }
                ],

                // Hard questions
                hard: [
                    { question: "Who is this person?", image: "/images/AHOF/JL.jpg", choices: ["JL", "Han", "Shuaibo", "Daisuke"], answer: "JL" },
                    { question: "Who is this person?", image: "/images/AHOF/Steven.jpg", choices: ["Jeongwoo", "Shuaibo", "Juwon", "Steven"], answer: "Steven" },
                    { question: "Who is this person?", image: "/images/AHOF/Woongki.jpg", choices: ["Juwon", "JL", "Woongki", "Jeongwoo"], answer: "Woongki" },
                    { question: "Who is this person?", image: "/images/AHOF/Chih-en.jpg", choices: ["Shuaibo", "Juwon", "Chih-en", "Daisuke"], answer: "Chih-en" },
                    { question: "Who is this person?", image: "/images/AHOF/Daisuke.jpg", choices: ["Daisuke", "Woongki", "Jeongwoo", "Han"], answer: "Daisuke" },
                    { question: "Who is this person?", image: "/images/AHOF/Juwon.jpg", choices: ["Chih-en", "Moka", "Juwon", "Woongki"], answer: "Juwon" },
                    { question: "Who is this person?", image: "/images/AHOF/Jeongwoo.jpg", choices: ["Han", "Chih-en", "Jeongwoo", "Shuaibo"], answer: "Jeongwoo" },
                    { question: "Who is this person?", image: "/images/AHOF/Han.jpg", choices: ["Woongki", "Daisuke", "Han", "Chih-en"], answer: "Han" },
                    { question: "Who is this person?", image: "/images/AHOF/Shuaibo.jpg", choices: ["Daisuke", "Steven", "Woongki", "Shuaibo"], answer: "Shuaibo" },
                    { question: "What is Steven's MBTI?", choices: ["ISTP", "ENFP", "INFP", "ISFP"], answer: "INFP" },
                    { question: "What is Jeongwoo's MBTI?", choices: ["ISTJ", "ENTP", "ENFJ", "ESTP"], answer: "ISTJ" },
                    { question: "What is Woongki's MBTI?", choices: ["ISTP", "ENFP", "ISTJ", "ESTP"], answer: "ENFP" },
                    { question: "What is Shuaibo's MBTI?", choices: ["ESTP", "ESFP", "ISTJ", "ISTP"], answer: "ESFP" },
                    { question: "What is Han's MBTI?", choices: ["INJP", "ENFJ", "ENTP", "ISFP"], answer: "ISFP" },
                    { question: "What is JL's MBTI?", choices: ["ESFP", "ESTJ", "ENFP", "ENTP"], answer: "ENFP" },
                    { question: "What is Juwon's MBTI?", choices: ["ISFP", "INFJ", "ESTP", "ENFP"], answer: "ISFP" },
                    { question: "What is Chih-en's MBTI?", choices: ["ESTJ", "ENFJ", "ENTJ", "ISFP"], answer: "ENTJ" },
                    { question: "What is Daisuke's MBTI?", choices: ["ISTJ", "INFJ", "ENFP", "ESFP"], answer: "ENFP" }
                ]
            }
        }
    ]);
        // Shows success message
        console.log('Database imported successfully');
    }   
        // Catches and logs any errors
        catch (err) {
            console.error('Error importing to database:', err);
        } 

        // Ensures the client is closed after operation
        finally {
            await client.close();
            console.log('Connection closed');
        }
    }
    
// Calls the function to import data
data();