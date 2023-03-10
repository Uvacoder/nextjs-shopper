'use client';

import Button from '@src/common/Button';
import { Product } from '@src/products/ProductsTypes';
import { useAppDispatch } from '@src/store/store';
import { addProduct } from './cartSlice';

type AddToCartButtonProps = {
  className?: string;
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();

  return (
    <Button
      variant="primary"
      isFullWidth
      className="max-w-xs"
      onClick={() => dispatch(addProduct(product))}
    >
      Add to Cart
    </Button>
  );
}
