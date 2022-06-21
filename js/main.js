
import users from './assets/json/users.json' assert { type: "json" };


(() => {
    const usersList = JSON.parse(JSON.stringify(users));
    /**
     * We can define a variable with var, let or const
     * We don't use var nowadays
     * Difference between const and let
     * When you define a variable with const, you cannot change its value
     * Example:
     * const a = 3;
     *
     * /!\ const a = 4; -> it won't work
     * When you define a variable with const, you can redefine its value
     * Example:
     * const a = 3;
     * /!\ const a = 4; -> it'll work
     **/

        // Multiple ways to get our reversed word
    const toReverse = () => {
            /*
            *The querySelector is used to retrieve our element from the HTML
            * after getting our element, we need its content
            * -> means the string/word inside my tag
            * To get it, we need the innerHTML property
            */
            const wordToReverse = document.querySelector('.ex-1__question-word').innerHTML;
            const reversedWord = wordToReverse
                /*
                * split the string and create an array with each element
                * you can provide a parameter to the function
                * for example .split('-') on Jean-Pierre
                * output: ["Jean", "Pierre"]
                 */
                .split('')
                /* reverse the array
                * output: ["Pierre", "Jean"]
                */
                .reverse()
                /*
                * join the elements of an array
                * you can provide a parameter to the function
                * for example .join('-') on ["Pierre", "Jean"]
                * output: Pierre-Jean
                 */
                .join('');

            /*
            * String can be considered as an array and loop on it
            * We can use 'for' loop to parse our string
            */


            // Create a mutable variable
            // let reversedWord = '';
            // for (let i = 0; i < reversedWord.length; i++) {
            //   charAt is used to return the letter positioned at the index i
            //   reversedWord += wordToReverse.charAt(i)
            // }

            const tag = document.querySelector('.ex-1__result');
            tag.innerHTML = reversedWord;
        }

    const toFilter = () => {
        const letterToRemove = ['E', 'R', 'I']
        const wordToTransform = document.querySelector('.ex-2__question-word');
        const transformedWord = wordToTransform.innerHTML
            .split('')
            /*
            * filter() will parse each element of the array and
            * will return an array without the element checking the condition
            * letter represents an element of the array
            * () => is an arrow function
            * you can also write function (letter) {return !letterToRemove.includes}
            * includes will check each element of the array
            * return true if it finds something
            */
            .filter((letter) => !letterToRemove.includes(letter));

        const tag = document.querySelector('.ex-2__result');
        tag.innerHTML = transformedWord.join('');
    }

    const findMark = () => {
        const mark = usersList.find(user => user.name.includes('Mark'));

        const img = document.querySelector('.ex-3__result-img');
        const name = document.querySelector('.ex-3__result-name');
        const company = document.querySelector('.ex-3__result-company');
        const mail = document.querySelector('.ex-3__result-email');

        name.innerHTML = mark.name;
        company.innerHTML = mark.company;
        mail.href = 'mailto:' + mark.email;
        img.src = mark.picture;
    }

    const getAverageAge = () => {
        const usersAge = usersList.map(elem => elem.age);

        const average = usersAge.reduce((a, b) => a + b, 0) / usersAge.length;
        const tag = document.querySelector('.ex-5__result');
        tag.innerHTML = average.toString();
    }

    const orderUsersByAge = () => {
        /*
        * depend on the result of the return
        * (< 0) sort a before b
        * (> 0) sort a after b
        * (=== 0) keep original order of a and b
         */

        const usersByAge = users.sort((a, b) => {
            return a.age - b.age;
        });

        const youngest = document.querySelector('.ex-4__result-youngest');
        const oldest = document.querySelector('.ex-4__result-oldest');

        const youngestUser = usersByAge.at(0);
        const oldestUser = usersByAge.at(-1);

        youngest.innerHTML = `${youngestUser.name} (${youngestUser.age} ans)`;
        oldest.innerHTML = `${oldestUser.name} (${oldestUser.age} ans)` ;
    }

    toReverse();
    toFilter();
    getAverageAge();
    findMark();
    orderUsersByAge();
})();