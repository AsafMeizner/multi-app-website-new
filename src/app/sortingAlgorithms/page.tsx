// src/app/sortingAlgorithms/page.tsx
"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSortingArray, setArray, randomizeArray, runSortingAlgorithm } from './server';

const SortingAlgorithms = () => {
    const [array, setArrayState] = useState<number[]>([]);

    // get the screen width and height
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        // Fetch the initial array when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        const initialArray = await getArray();
        setArrayState(initialArray);
    };

    const getArray = async () => {
        return getSortingArray();
    };

    const generateRandomArray = async () => {
        await randomizeArray();
        fetchData();
    };

    const performSort = async (number: number) => {
        await runSortingAlgorithm(number);
        fetchData();
    };

    // get the sorting algorithm enum
    enum SortingAlgorithm {
        BubbleSort = 0,
        SelectionSort = 1,
        QuickSort = 2,
        MergeSort = 3,
        HeapSort = 4,
        BogoSort = 5,
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Link legacyBehavior href="/">
                <a style={{ color: 'white', position: 'absolute', top: '10px', left: '10px' }}>Home</a>
            </Link>
            <div style={{ color: 'white', textAlign: 'center' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '0px', fontSize: '48px' }}>Sorting Algorithm Visualization</h1>
                <div style={{ textAlign: 'center' }}>
                    <button className='purpleButton' style={{ marginRight: '10px' }} onClick={() => generateRandomArray()}>Generate Random Array</button>
                    <button className='purpleButton' style={{ marginRight: '10px' }} onClick={() => performSort(SortingAlgorithm.BubbleSort)}>Bubble Sort</button>
                    <button className='purpleButton' style={{ marginRight: '10px' }} onClick={() => performSort(SortingAlgorithm.SelectionSort)}>Selection Sort</button>
                    <button className='purpleButton' style={{ marginRight: '10px' }} onClick={() => performSort(SortingAlgorithm.QuickSort)}>Quick Sort</button>
                    <button className='purpleButton' style={{ marginRight: '10px' }} onClick={() => performSort(SortingAlgorithm.MergeSort)}>Merge Sort</button>
                    <button className='purpleButton' style={{ marginRight: '10px' }} onClick={() => performSort(SortingAlgorithm.HeapSort)}>Heap Sort</button>
                    <button className='purpleButton' style={{ marginRight: '10px' }} onClick={() => performSort(SortingAlgorithm.BogoSort)}>Bogo Sort</button>
                </div>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '5px' }}>
                {/* Display the array using vertical bars in different lengths */}
                {array.map((value, index) => (
                    <div
                        className='array-bar'
                        key={index}
                        style={{
                            backgroundColor: 'white',
                            height: `${value}px`,
                            width: `${1000 / array.length}px`,
                        }}></div>
                        // TODO: make the width dynamic based on the screen width
                ))}
            </div>
        </div>
    );
};

export default SortingAlgorithms;
