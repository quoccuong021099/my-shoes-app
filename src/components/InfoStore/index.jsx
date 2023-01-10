import { Container } from '@mui/material';
import { DeliveryIcon, MoneyIcon, SupportAgentIcon } from '../icons';
import InfoStoreItem from './InfoStoreItem';

export default function InfoStore() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        padding: '0 !important',
      }}
    >
      <InfoStoreItem
        icon={<DeliveryIcon sx={{ fontSize: 50 }} color="third" />}
        title="Fast delivery"
        subtitle="Express delivery"
        desc="Quick delivery for 1 hour"
      />
      <InfoStoreItem
        icon={<MoneyIcon sx={{ fontSize: 50 }} color="third" />}
        title="Genuine commitment"
        subtitle="100% Authentic"
        desc="Commitment to genuine products from Europe"
      />
      <InfoStoreItem
        icon={<SupportAgentIcon sx={{ fontSize: 50 }} color="third" />}
        title="Support 24/24"
        subtitle="Call now 0869504***"
        desc="Call me baby"
      />
    </Container>
  );
}
