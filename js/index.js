function quote() {
    var quotes = [
        '“The greatest glory in living lies not in never falling, but in rising every time we fall.”',
        '“The way to get started is to quit talking and begin doing.”',
        '“If life were predictable it would cease to be life, and be without flavor.”',
        '“If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.”',
        '“Life is what happens when you\'re busy making other plans.”',
        '“Spread love everywhere you go. Let no one ever come to you without leaving happier.”',
        '“When you reach the end of your rope, tie a knot in it and hang on.”',
        '“Always remember that you are absolutely unique. Just like everyone else.”',
        '“Don\'t judge each day by the harvest you reap but by the seeds that you plant.”',
        '“The future belongs to those who believe in the beauty of their dreams.”',
        '“Tell me and I forget. Teach me and I remember. Involve me and I learn.”',
        '“The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.”',
        '“It is during our darkest moments that we must focus to see the light.”',
        '“Whoever is happy will make others happy too.”',
        '“Do not go where the path may lead, go instead where there is no path and leave a trail.”',
        '“You will face many defeats in life, but never let yourself be defeated.”',
        '“The greatest glory in living lies not in never falling, but in rising every time we fall.”',
        '“In the end, it\'s not the years in your life that count. It\'s the life in your years.”',
        '“Never let the fear of striking out keep you from playing the game.”',
        '“Life is either a daring adventure or nothing at all.”'
    ];
    var author = [
        '-Nelson Mandela',
        '-Walt Disney',
        '-Eleanor Roosevelt',
        '-James Cameron',
        '-John Lennon',
        '-Mother Teresa',
        '-Franklin D. Roosevelt',
        '-Margaret Mead',
        '-Robert Louis Stevenson',
        '-Eleanor Roosevelt',
        '-Benjamin Franklin',
        '-Helen Keller',
        '-Aristotle',
        '-Anne Frank',
        '-Ralph Waldo Emerson',
        '-Maya Angelou',
        '-Nelson Mandela',
        '-Abraham Lincoln',
        '-Babe Ruth',
        '-Helen Keller'
    ];
    var random = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[random];
    document.getElementById('author').innerHTML = author[random];
}