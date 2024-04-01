import React from "react";
import feed from '../../assets/feed.png';
import arrow from '../../assets/arrow.png';

export default function Feedback() {
  return (  <section className="text-center px-8 mt-20 sm:mt-32 md:mt-20">
    <img src={feed}  className="mx-auto mb-8" />
<h2 className="text-slate-900 text-4xl tracking-tight font-inter sm:text-4xl dark:text-white bold black"><b>Our Clients Feedback.</b></h2>
<br></br><p className="font-inter ">The food at your doorstep. Why starve when you have us. You hunger partner.</p>
<p> Straight out of the oven to your doorstep.</p>
<br>
</br>
<br></br>
<blockquote>
<section className="">
<p className="mt-6 max-w-3xl mx-auto font-inter text-base italic font-medium">"I recently used Tasty Rush for the first time and I'm thoroughly impressed. 
The app was incredibly user-friendly, making it easy to find exactly what I was craving. My order arrived faster than expected,
 and the food was just as fresh and delicious as dining in the restaurant. It's clear Tasty Rush values their customers' experience, 
 and I appreciated the real-time updates on my order.
 Definitely my go-to for food delivery now. Great service!"
</p>
</section>
<br></br>
<h5 className="font-inter font-semibold text-base sm:text-lg">Mitchell Marsh</h5>
<p>CEO, Bexon Agency</p>
</blockquote>
<br></br>
<img src={arrow}  className="mx-auto mb-8" />
</section>
  )
}
