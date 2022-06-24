Prompt 1

URLs cannot have spaces. Instead, all spaces in a string are replaced with %20. Write an algorithm that replaces all spaces in a string with %20.

You may not use the replace() method or regular expressions to solve this problem. Solve the problem with and without recursion.

Example
Input: "Jasmine Ann Jones"

Output: "Jasmine%20Ann%20Jones"


element = " "
Input.forEach {
 if (element == true)
    element = "%20"
};


prompt 2

Write an algorithm that removes duplicates from an array. Do not use a function like filter() to solve this. Once you have solved the problem, demonstrate how it can be solved with filter(). Solve the problem with and without recursion.

Example
Input: [7, 9, "hi", 12, "hi" 7, 53]
input2 = Input

Output: [7, 9, "hi", 12, 53]

Input.forEach {
    Input2.forEach{
      if input2 == Input
      Input = ""
    }
    return Input
}

prompt 3

Write an algorithm that takes a string with repeated characters and compresses them, using a number to show how many times the repeated character has been compressed. For instance, aaa would be written as 3a. Solve the problem with and without recursion.

Example
Input: "aaabccdddda"

Output: "3ab2c4da"

Input.forEach {
  if(array2.includes(Input))
    array2[i-1] += 1
  else
    push.(array2)
};

prompt 4

Example
Input: "hello"

Output: false

Input: "copyright"

Output: true

Input.forEach () {
  if(Input[i] == input[i+1])
    return false
  else
    return true
}



prompt 5

Write an algorithm that sorts an array without using the sort() method. There are many different sorting algorithms - take the time to read about the following:

Quick sort
Merge sort
Heap sort
Insertion sort
Bubble sort
Selection sort
You may implement any of the above algorithms (or your own) to solve the problem - as long as it doesn't use sort().

Example
Input: [9, 2, 7, 12]

Output: [2, 7, 9, 12]

import java.io.*;
 
class GFG{
     
static void swap(int[] arr, int i, int j)
{
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
 
static int partition(int[] arr, int low, int high)
{
     
    int pivot = arr[high];
     
    int i = (low - 1);
 
    for(int j = low; j <= high - 1; j++)
    {
        if (arr[j] < pivot)
        {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}
 
static void quickSort(int[] arr, int low, int high)
{
    if (low < high)
    {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
 static void printArray(int[] arr, int size)
{
    for(int i = 0; i < size; i++)
        System.out.print(arr[i] + " ");
         
    System.out.println();
}
 
public static void main(String[] args)
{
    int[] arr = { 10, 7, 8, 9, 1, 5 };
    int n = arr.length;
     
    quickSort(arr, 0, n - 1);
    System.out.println("Sorted array: ");
    printArray(arr, n);
}
}




