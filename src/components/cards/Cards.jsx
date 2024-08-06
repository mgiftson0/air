import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ComputerOutlined, CloudOutlined, SecurityOutlined, SupportOutlined } from '@mui/icons-material';

const Card = ({ title, description, icon }) => {
  const IconComponent = getIconComponent(icon);

  return (
    <CardWrapper>
      <IconWrapper>
        <IconComponent />
      </IconWrapper>
      <ContentWrapper>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </ContentWrapper>
    </CardWrapper>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'computer': return ComputerOutlined;
    case 'cloud': return CloudOutlined;
    case 'security': return SecurityOutlined;
    case 'support': return SupportOutlined;
    default: return ComputerOutlined;
  }
};

const CardWrapper = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 15px;
  padding: 1.5rem;
  width: 280px;
  height: 180px;
  position: relative;
  z-index: 10; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: translateY(-50%);
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.1),
    0 6px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-55%) scale(1.05);
    box-shadow: 
      0 15px 30px rgba(0, 0, 0, 0.15),
      0 10px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 160px;
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 140px;
    padding: 1rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #4a90e2;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: #333;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CardDescription = styled.p`
  margin: 0.5rem 0 0;
  color: #666;
  font-size: 0.875rem;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export default Card;
