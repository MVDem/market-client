// src/components/CategoryList.tsx
import React, { useRef } from 'react';
import { Category } from '../../types/Category';
import styles from './CategoryList.module.scss';
import CategoryListItem from './CategoryListItem';

type CategoryListProps = {
  categoryList: Category[];
  chooseCategory: (id: number) => void;
  currentCategory: number | null;
};

export default function CategoryList({
  categoryList,
  chooseCategory,
  currentCategory,
}: CategoryListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (containerRef.current) {
      isDragging.current = true;
      startX.current = event.pageX - containerRef.current.offsetLeft;
      scrollLeft.current = containerRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging.current || !containerRef.current) return;
    const x = event.pageX - containerRef.current.offsetLeft;
    const walk = x - startX.current;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={styles.content}
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          onMouseMove={(e: React.MouseEvent<HTMLDivElement>) =>
            handleMouseMove(e as React.MouseEvent<HTMLDivElement, MouseEvent>)
          }
        >
          {categoryList?.map((category, i) => (
            <CategoryListItem
              key={i}
              item={category}
              currentCategory={category.id === currentCategory}
              chooseCategory={chooseCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
