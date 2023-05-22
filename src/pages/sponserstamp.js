import Layout from "../components/Layout/layout";
import Sponser from "../components/Sponser/sponser";
import Stamp from "../components/Stamp/stamp";

export default function SponcerStamp() {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-rose-400">
      <Layout>
        <Stamp />
        <Sponser />
      </Layout>
    </div>
  );
}
