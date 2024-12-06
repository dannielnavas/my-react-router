import { useParams } from "react-router-dom";

const Product: React.FC = () => {
  const { id } = useParams();
  return (
    <section>
      <h2>Product {id}</h2>
    </section>
  );
};

export { Product };
