import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { RecipeDetail } from '../RecipeDetail';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('RecipeDetail', () => {
  it('renders recipe details correctly', () => {
    renderWithRouter(<RecipeDetail />);
    
    // Check if main elements are rendered
    expect(screen.getByText('Creamy Mushroom Pasta')).toBeInTheDocument();
    expect(screen.getByText('30 min')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('toggles cooking mode when start cooking button is clicked', () => {
    renderWithRouter(<RecipeDetail />);
    
    const startCookingButton = screen.getByText('Start Cooking');
    fireEvent.click(startCookingButton);
    
    expect(screen.getByText('Cooking Mode')).toBeInTheDocument();
  });

  it('displays all recipe ingredients', () => {
    renderWithRouter(<RecipeDetail />);
    
    const ingredients = [
      '400g pasta',
      '300g mushrooms',
      '2 cloves garlic',
      '1 cup heavy cream',
      'Salt and pepper to taste',
    ];

    ingredients.forEach(ingredient => {
      expect(screen.getByText(ingredient)).toBeInTheDocument();
    });
  });

  it('displays all cooking instructions', () => {
    renderWithRouter(<RecipeDetail />);
    
    const instructions = [
      'Boil pasta according to package instructions.',
      'Sauté mushrooms and garlic until golden brown.',
      'Add cream and simmer until thickened.',
      'Combine with pasta and season to taste.',
    ];

    instructions.forEach(instruction => {
      expect(screen.getByText(instruction)).toBeInTheDocument();
    });
  });
});