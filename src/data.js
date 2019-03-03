const people = [
  {
    name: 'Michel Foucault',
    quote: '"Freedom of conscience entails more dangers than authority and despotism."',
    description: 'Michel Foucault was a major figure in two successive waves of 20th century French thought--the structuralist wave of the 1960s and then the poststructuralist wave. By the premature end of his life, Foucault had some claim to be the most prominent living intellectual in France.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/5/52/Foucault5.jpg',
  },
  {
    name: 'Friedrich Nietzsche',
    quote: '"To live is to suffer, to survive is to find some meaning in the suffering"',
    description: 'Nietzsche was a German philosopher, essayist, and cultural critic. His writings on truth, morality, language, aesthetics, cultural theory, history, nihilism, power, consciousness, and the meaning of existence have exerted an enormous influence on Western philosophy and intellectual history.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Nietzsche187a.jpg',
  },
  {
    name: 'Albert Camus',
    quote: '“Should I kill myself, or have a cup of coffee?”',
    description: 'Albert Camus was a French-Algerian journalist, playwright, novelist, philosophical essayist, and Nobel laureate. Though he was neither by advanced training nor profession a philosopher, he nevertheless made important, forceful contributions to a wide range of issues in moral philosophy in his novels, reviews, articles, essays, and speeches—from terrorism and political violence to suicide and the death penalty.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Albert_Camus%2C_gagnant_de_prix_Nobel%2C_portrait_en_buste%2C_pos%C3%A9_au_bureau%2C_faisant_face_%C3%A0_gauche%2C_cigarette_de_tabagisme.jpg',
  },
  {
    name: 'René Descartes',
    quote: '"Cogito ergo sum. (I think; therefore I am.)"',
    description: 'René Descartes is often credited with being the “Father of Modern Philosophy.” This title is justified due both to his break with the traditional Scholastic-Aristotelian philosophy prevalent at his time and to his development and promotion of the new, mechanistic sciences.',
    imageUrl: 'https://www.iep.utm.edu/wp-content/media/descarte.jpg',
  },
  {
    name: 'Thomas Aquinas',
    quote: '"Beware of the person of one book."',
    description: 'St. Thomas Aquinas was a Dominican priest and Scriptural theologian. He took seriously the medieval maxim that “grace perfects and builds on nature; it does not set it aside or destroy it.” Therefore, insofar as Thomas thought about philosophy as the discipline that investigates what we can know naturally about God and human beings, he thought that good Scriptural theology, since it treats those same topics, presupposes good philosophical analysis and argumentation. ',
    imageUrl: 'https://www.iep.utm.edu/wp-content/media/aquinas.jpg',
  },
  {
    name: 'Jean-Paul Sartre',
    quote: '"If you are lonely when you are alone, you are in bad company."',
    description: 'Sartre is arguably the best known philosopher of the twentieth century. His indefatigable pursuit of philosophical reflection, literary creativity and, in the second half of his life, active political commitment gained him worldwide renown, if not admiration.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Sartre_1967_crop.jpg',
  },
  {
    name: 'Simone de Beauvoir',
    quote: '"Change your life today. Don\'t gamble on the future, act now, without delay."',
    description: 'Simone de Beauvoir was one of the most preeminent French existentialist philosophers and writers. Working alongside other famous existentialists such as Jean-Paul Sartre, Albert Camus and Maurice Merleau-Ponty, de Beauvoir produced a rich corpus of writings including works on ethics, feminism, fiction, autobiography, and politics.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Simone_de_Beauvoir2.png',
  },
  {
    name: 'Søren Kierkegaard',
    quote: '"Life can only be understood backwards; but it must be lived forwards."',
    description: 'Søren Kierkegaard is an outsider in the history of philosophy. His peculiar authorship comprises a baffling array of different narrative points of view and disciplinary subject matter, including aesthetic novels, works of psychology and Christian dogmatics, satirical prefaces, philosophical "scraps" and "postscripts," literary reviews, edifying discourses, Christian polemics, and retrospective self-interpretations. ',
    imageUrl: 'https://www.iep.utm.edu/wp-content/media/Kierkegaard.jpg',
  },
  {
    name: 'Aristotle',
    quote: '"It is the mark of an educated mind to be able to entertain a thought without accepting it."',
    description: 'Aristotle is a towering figure in ancient Greek philosophy, making contributions to logic, metaphysics, mathematics, physics, biology, botany, ethics, politics, agriculture, medicine, dance and theatre. He was a student of Plato who in turn studied under Socrates. He was more empirically-minded than Plato or Socrates and is famous for rejecting Plato\'s theory of forms.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/800px-Aristotle_Altemps_Inv8575.jpg',
  },
  {
    name: 'Plato',
    quote: '"Be kind, for everyone you meet is fighting a hard battle."',
    description: 'Plato is one of the world\'s best known and most widely read and studied philosophers. He was the student of Socrates and the teacher of Aristotle, and he wrote in the middle of the fourth century B.C.E. in ancient Greece. Though influenced primarily by Socrates, to the extent that Socrates is usually the main character in many of Plato\'s writings, he was also influenced by Heraclitus, Parmenides, and the Pythagoreans.',
    imageUrl: 'https://cdn.britannica.com/88/149188-050-05FF7D99.jpg',
  },
  {
    name: 'Socrates',
    quote: '"I know that I am intelligent, because I know that I know nothing."',
    description: 'Socrates is one of the few individuals whom one could say has so-shaped the cultural and intellectual development of the world that, without him, history would be profoundly different.  He is best known for his association with the Socratic method of question and answer, his claim that he was ignorant (or aware of his own absence of knowledge), and his claim that the unexamined life is not worth living, for human beings.',
    imageUrl: 'https://cdn.britannica.com/69/75569-050-6C79C93B.jpg',
  },
  {
    name: 'Immanuel Kant',
    quote: '"Happiness is not an ideal of reason, but of imagination."',
    description: 'Towards the end of his most influential work, Critique of Pure Reason(1781/1787), Kant argues that all philosophy ultimately aims at answering these three questions: “What can I know? What should I do? What may I hope?” The book appeared at the beginning of the most productive period of his career, and by the end of his life Kant had worked out systematic, revolutionary, and often profound answers to these questions.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Kant_gemaelde_3.jpg',
  },
  {
    name: 'David Hume',
    quote: '"The life of man is of no greater importance to the universe than that of an oyster."',
    description: 'Part of Hume’s fame and importance owes to his boldly skeptical approach to a range of philosophical subjects. In epistemology, he questioned common notions of personal identity, and argued that there is no permanent “self” that continues over time. He dismissed standard accounts of causality and argued that our conceptions of cause-effect relations are grounded in habits of thinking, rather than in the perception of causal forces in the external world itself.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Painting_of_David_Hume.jpg',
  },
  {
    name: 'Ludwig Wittgenstein',
    quote: '"The limits of my language mean the limits of my world."',
    description: 'Ludwig Wittgenstein is one of the most influential philosophers of the twentieth century, and regarded by some as the most important since Immanuel Kant. His early work was influenced by that of Arthur Schopenhauer and, especially, by his teacher Bertrand Russell and by Gottlob Frege, who became something of a friend. This work culminated in the Tractatus Logico-Philosophicus, the only philosophy book that Wittgenstein published during his lifetime.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/60/35._Portrait_of_Wittgenstein.jpg',
  },
  {
    name: 'Karl Marx',
    quote: '"The history of all previous societies has been the history of class struggles."',
    description: 'Karl Marx is best known not as a philosopher but as a revolutionary, whose works inspired the foundation of many communist regimes in the twentieth century. It is hard to think of many who have had as much influence in the creation of the modern world.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Karl_Marx_001.jpg',
  },
  {
    name: 'Arthur Schopenhauer',
    quote: '"Life swings like a pendulum backward and forward between pain and boredom."',
    description: 'Arthur Schopenhauer has been dubbed the artist’s philosopher on account of the inspiration his aesthetics has provided to artists of all stripes. He is also known as the philosopher of pessimism, as he articulated a worldview that challenges the value of existence.',
    imageUrl: 'https://www.iep.utm.edu/wp-content/media/Schopenhauer.jpg',
  },
  {
    name: 'Jean-Jacque Rousseau',
    quote: '"Man is born free and everywhere he is in chains."',
    description: 'ean-Jacques Rousseau was one of the most influential thinkers during the Enlightenment in eighteenth century Europe. His first major philosophical work, A Discourse on the Sciences and Arts, was the winning response to an essay contest conducted by the Academy of Dijon in 1750. ',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Maurice_Quentin_de_La_Tour_-_Portrait_of_Jean-Jacques_Rousseau_-_adjusted.jpg',
  },
  {
    name: 'Niccolò Machiavelli',
    quote: '"It is better to be feared than loved, if you cannot be both."',
    description: 'Machiavelli was a 16th century Florentine philosopher known primarily for his political ideas. His two most famous philosophical books, The Prince and the Discourses on Livy, were published after his death. His philosophical legacy remains enigmatic, but that result should not be surprising for a thinker who understood the necessity to work sometimes from the shadows.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg',
  },
];

module.exports = {
  people,
};
