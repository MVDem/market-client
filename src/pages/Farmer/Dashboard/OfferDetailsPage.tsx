import { useNavigate } from 'react-router-dom';
import OfferShortDetails from '../../../components/OfferShortDetails/OfferShortDetails';
import { OfferCard } from '../../../types/Offers';

function OfferDetailsPage() {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/farmer/offers/edit/${_offer.id}`);
  };
  return (
    <>
      <OfferShortDetails offer={_offer} />
      <button onClick={handleEdit}>Edit</button>
    </>
  );
}
export default OfferDetailsPage;

const _offer: OfferCard = {
  id: '1',
  name: 'Apples',
  unit: '3 kg',
  price: '10',
  image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
  isActive: true,
  description_EN: 'Fresh apples',
  description_HE: 'תפוחים חדשים',
  farmerId: 12345,
};
