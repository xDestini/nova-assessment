import PageBuilder from './components/PageBuilder';
import data from '../data.json';

export default function Home() {
  return (
    <main>
      <PageBuilder data={data} />
    </main>
  );
}
