import './gift.css';
import gift from '../images_2/gg.webp'
import gift1 from '../images_2/gg2.webp'
import gift2 from '../images_2/gg3.webp'
import gift3 from '../images_2/gg4.webp'
import gift4 from '../images_2/gg5.webp'
import gift5 from '../images_2/gg6.webp'

const Giftcard = () => {
  return (
    <div className="head mt-3 p-1">
      <h5>Gift Card Store</h5>
      <p>
        Special occasions call for special gifts. Whether its a birthday or an anniversary, finding the right gift for your loved ones is always a difficult task. After you get a gift, you have to hope that they like it. A simple solution to this conundrum is the Flipkart Gift Card Store. You can give Flipkart gift cards and vouchers across multiple occasions to your friends or family, allowing them to shop for whatever their heart desires. So, what are you waiting for? Get gift vouchers online on Flipkart, gift or redeem them, and do more with this feature. Flipkart Gift Card Store also offers a wide range of gift cards from categories such as travel, jewelry, fashion, grocery, and apps & more. Choose from various denominations or enter any preferred amount between Rs 25 to Rs 10,000. Bid adieu to gifting troubles, send online gift cards to your friends and family, bring a smile to their faces, and make special moments even more special! This information was last updated on 11-Sep-24.
      </p>

      <section className="gift">
        <img src={gift} alt="Gift Card Store" />
      </section>

      <section className="port">
        <img src={gift1} alt="Occasions-based Gift Cards" />
        <h1>Occasion-based Gift Cards</h1>
        <h2>Theres Something for Every Occasion!</h2>
      </section>

      <section className="day">
        <img src={gift2} alt="Gift Card Option 1" />
        <img src={gift3} alt="Gift Card Option 2" />
        <img src={gift4} alt="Gift Card Option 3" />
      </section>

      <section className="birth">
        <img src={gift5} alt="Birthday Gift Card" />
      </section>

      <section className="down">
        <h5>Flipkart Gift Cards - For Those Special Moments</h5>
        <p>
          Gift cards provide an ideal gifting solution for all occasions. In addition to the ease of gifting, they offer the recipient the choice to buy something they want, whenever they want. If you cant decide what to get someone, visit the Gift Cards Section on Flipkart. From fashion accessories and groceries to travel coupons and jewelry vouchers, gift vouchers offer a great way to let the recipient choose what they want. Gift cards range from Rs. 50 to Rs. 10,000 and above. Choose one based on your preference and category. You can gift Flipkart Gift Cards or choose from 100+ brands like Myntra, Tanishq, Croma, Google Play, Big Bazaar, and others from categories such as Fashion, Travel, Jewelry, Grocery, Apps, and Subscriptions.
        </p>

        <h5>Buy Flipkart Gift Cards & Vouchers Online</h5>
        <p>
          Purchasing gift vouchers online is very simple. On the product page, select the value of the gift card you wish to purchase, click Buy Now, then enter the recipient details, address (if required), and Proceed to Pay. You can pay using a credit card, debit card, net banking, or UPI. After completing the checkout process, you will receive an email with the gift card details.
        </p>

        <p>
          If you have irregular working hours, dont have time for shopping, or if a special event is approaching and you’re unsure what to get, Flipkart gift cards are the perfect option. Send your loved ones Flipkart vouchers and give them the freedom to choose what they desire most.
        </p>
      </section>
    </div>
  );
};

export default Giftcard;
