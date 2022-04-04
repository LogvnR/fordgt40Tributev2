import {
  faGear,
  faCar,
  faScrewdriverWrench,
  faFlagCheckered,
} from '@fortawesome/free-solid-svg-icons';

import classes from '../Styles/Information.module.css';
import Icon from './UI/Icon';

import specs from '../Assets/specs.jpg';
import ferrari from '../Assets/ferrari.jpg';
import development from '../Assets/development.jpg';
import leMans from '../Assets/leMans.jpg';

const Information = () => {
  return (
    <div className={classes.container}>
      <Icon image={specs} title="Specifications" icon={faGear} />
      <Icon
        image={ferrari}
        title="Ferrari"
        icon={faCar}
        content1="In 1962, Ford was coming out of a major sales slide thanks to failed products like the Edsel and the growing popularity of rival products from GM and Chrysler. CEO Henry Ford II, the eldest son of Edsel Ford and eldest grandson of Henry Ford, was desperately looking for a way to turn the tide. Top executives, including Ford Division general manager Lee Iacocca, convinced him that the answer was a sports car."
        content2="There was just one problem: Ford didn’t have a sports car in its portfolio, and there were no plans to build one."
        content3="It was decided that the most expedient way to bring a vehicle to market would be to acquire one. That’s when the idea was floated to purchase Ferrari, which in those years was primarily a race car company that sold street-legal machines only to fund its track exploits."
        content4="In the spring of 1963, after months of negotiation, an agreement seemed to be near. Ford would pay millions to Enzo Ferrari for his company and all its assets. A former racer, Enzo was supposedly eager to put a deal together with Ford, a move that would relieve him of the burden of running the company day-to-day."
        content5="But at the eleventh hour, Ferrari balked at a clause in the contract that said Ford would control the budget and, thus, all the decisions governing the Ferrari racing team. Enzo was unwilling to relinquish control of his company’s motorsports program. He told Ford’s representatives that he’d never sell under those terms—nor, he added, would he sell to an ugly company that builds ugly cars in an ugly factory. It is rumored that he also insulted Henry II personally by insinuating that he couldn’t hold a candle to his grandfather, the real Henry Ford."
        content6="To add even more insult to injury, Enzo then turned around and sold a majority stake in Ferrari to fellow Italian automaker Fiat. Some Ford executives, including the Deuce, speculated that Enzo was never serious about selling to Ford at all but had only negotiated with the company in order to pressure Fiat to come up in price. The ploy worked, and Henry II was left looking like a fool—without a ride."
        content7="Enzo cut the deal off out of spite and Henry Ford II, enraged, decided to build a sports car that would humiliate Ferrari where it mattered to him the most, the 24 Hours of Le Mans. The seeds for the legendary GT40 race car were sowed."
      />
      <Icon
        image={development}
        title="Development"
        icon={faScrewdriverWrench}
        content1="Initially, the task of building the so-called Ferrari Killer was assigned to Ford’s Advanced Vehicles Group in the United Kingdom. Ford began negotiation with Lotus, Lola, and Cooper. Cooper had no experience in GT or prototype and its performances in Formula One were declining."
        content2="The Lola proposal was chosen since Lola had used a Ford V8 engine in its mid-engined Lola Mk6. It was one of the most advanced racing cars of the time, and made a noted performance in Le Mans 1963, even though the car did not finish, due to low gearing and slow revving out on the Mulsanne Straight. However, Eric Broadley, Lola Cars' owner and chief designer, agreed on a short-term personal contribution to the project without involving Lola Cars."
        content3="The agreement with Broadley included a one-year collaboration between Ford and Broadley, and the sale of the two Lola Mk 6 chassis builds to Ford. To form the development team, Ford also hired the ex-Aston Martin team manager John Wyer."
        content4="Ford Motor Co. engineer Roy Lunn was sent to England; he had designed the mid-engined Mustang I concept car powered by a 1.7-liter V4. Despite the small engine of the Mustang I, Lunn was the only Dearborn engineer to have some experience with a mid-engined car."
        content5="Overseen by Harley Copp, the team of Broadley, Lunn, and Wyer began working on the new car at the Lola Factory in Bromley. At the end of 1963, the team moved to Slough, near Heathrow Airport. Ford then established Ford Advanced Vehicles Ltd, a new subsidiary under the direction of Wyer, to manage the project."
        content6="The first chassis built by Abbey Panels of Coventry was delivered on 16 March 1964, with fiber-glass moldings produced by FibreGlass Engineering Ltd of Farnham."
        content7="While the first batch of GT40s to roll out of the Advance Vehicle Group were fast, they were also incredibly unstable and unreliable. And the brakes were downright dangerous."
        content8="According to Popular Mechanics, Ford engineers calculated that when a driver hit the brakes at the end of Le Mans’ Mulsanne Straight, the front brake rotors would heat up to 1,500 degrees Fahrenheit within seconds, causing them to fail. This would prove to be disastrous—even deadly—for any driver trying to compete in northwestern France, even the best in the world."
        content9="Ultimately, the Ford team couldn’t figure out how to make the cars stay firmly on the tarmac, let alone run continuously for 24 hours, two musts for a win in Le Mans. After losing to Ferrari at Le Mans in 1964 and 1965, Ford turned to the legendary Los Angeles car designer Carroll Shelby, one of the only American drivers to ever win at Le Mans, to run race operations. Shelby was already a consultant on the project, but now he was in charge, responsible for its success or failure."
        content10="After a challenging start, Shelby and his go-to test driver and engineering specialist Ken Miles, reinvented the GT40. And they did so by collaborating with Advanced Vehicle Group and Ford’s experimental engine group, rather than starting from scratch."
        content11="Shelby and Miles first improved the handling and stability of the vehicle by improving its aerodynamics through flow testing. They taped wool streamers or tufts to the exterior of the car to see how air traveled over and around the vehicle. If the yarn lay flat, all was good. If not, it indicated there were flaws in the car’s design that adversely affected downforce and stability. The data collected allowed Miles and Shelby to make body and suspension modifications that helped the GT40 be more stable and maneuverable on the track."
        content12="The brake problem was solved by Phil Remington, an engineer on the Ford team. He devised a quick-change brake system that allowed the mechanics to swap in new pads and rotors during a driver change, so the team didn’t have to worry about making the brakes last the entire race."
        content13="To address reliability issues, the team put the engine on a dyno, and programmed it to re-create the various stress points at Le Mans. Then the team ran the engine for 24 to 48 hours on the dyno, virtually re-creating the conditions the engine would face during the race so it wouldn’t break down before the finish line."
      />
      <Icon
        image={leMans}
        title="Le Mans"
        icon={faFlagCheckered}
        content1="Shelby's first victory came on their maiden race with the Ford program, with Ken Miles and Lloyd Ruby taking a Shelby American-entered Ford GT40 to victory in the Daytona 2000 in February 1965. One month later Ken Miles and Bruce McLaren came in second overall and first in prototype class at the Sebring 12-hour race. The rest of the season, however, was a disappointment."
        content2="The experience gained in 1964 and 1965 allowed the 7-liter Mk II to dominate the following year. In February, the GT40 again won at Daytona. This was the first year Daytona was run in the 24 Hour format and Mk II's finished 1st, 2nd, and 3rd. In March, at the 1966 12 Hours of Sebring, GT40s again took all three top finishes with the X-1 Roadster first, a Mk. II taking second, and a Mk. I in third."
        content3="Then in June at the 24 Hours of Le Mans the GT40 achieved yet another victory Ford didn’t just defeat Ferrari at Le Mans in 1966, it humiliated the Italian stallions. While Ferrari didn’t even have a car that completed the race, GT40 Mk. II’s captured first, second and third places."
        content4="The finish wasn’t without controversy. Late in the race, Miles was well ahead of the competition, on his way to ending Ferrari’s dominance at Le Mans and becoming the only driver to win the world’s three biggest endurance race—the 24 hours of Daytona, 12 Hours of Sebring and 24 Hours of Le Mans—in the same year."
        content5="Ford’s PR guru Leo Beebe wanted to celebrate the win with a picture of the trio crossing the finish line together. So, he had Shelby order Miles to slow down and let the other GT40 teams catch up. After crossing the line, Miles was informed that he did not win the race. His teammate Bruce McLaren did. McLaren started several cars behind Miles. So even though Miles was faster until the very end, McLaren actually traveled farther faster, because Miles intentionally slowed down."
        content6="Despite this, the GT40 would go on to win the next 3 years, all with different drivers."
      />
    </div>
  );
};

export default Information;
