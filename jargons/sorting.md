---
title: sorting
sameWith:
- sorting algorithm
tags:
- genel
- programlama
---

Sorting veri öğeleri arasındaki bazı doğrusal ilişkilere dayalı, verilerin belirli bir düzene göre sıralanmasıdır. Genelde yapılacak olan aramaları kolaylaştırmak için tercih edilir. Örneğin; isimlerin karışık şekilde tutulduğu bir telefon defterinde aranan ismi bulmak, isimleri alfabetik sıraya göre dizdikten sonra bulmaktan daha uzun sürebilir. Bu yüzden verileri öncellikle sıraya koyarız.

Sorting çeşitli [algoritmalar](/algorithm) kullanılarak yapılabilir, bunlardan bazıları:

# Bubble sort

Her eleman bir sonraki eleman ile karşılaştırılıp büyüklük, küçüklük durumularına göre yer değiştirme gerçekleştirilir. Bu döngü sonunda liste sıralanmadıysa döngü liste sıralanana kadar tekrar edilir.

```c
void bubleSort(int arr[], int size) {
	int i,j;
	for(i=0; i < size; i++) {
		for(j=1; j < size - i; j++) {
			if( arr[j-1] > arr[j]) {
				int temp = arr[j];
				arr[j] = arr[j-1];
				arr[j-1] = temp;
			}
		}
	}
}
```

# Selection sort

Her adımda dizideki en küçük eleman bulunur ve dizininin başındaki eleman bu eleman ile yer değiştirilir.

```c
void selectionSort(int arr[], int size) {
	int i,j;
	int minimumIndex;
	for(i = 0; i < size; i++) {
		minimumIndex = i;
		for(j = i + 1; j < size; j++) {
			if( arr[j] < arr[minimumIndex] ) {
				minimumIndex = j;
			}
		}
		int temp = arr[i];
		arr[i] = arr[minimumIndex];
		arr[minimumIndex] = temp;
	}
}
```

# Insertion sort

Bu algoritmada başlangıçta bir eleman vardır. Diğer elemanlar yavaş yavaş listeye doğru pozisyonda eklenir.

```c
void insertionSort(int arr[], int size) {
	int i, j;
	int element;
	for(i = 1; i < size; i++) {
		element = arr[i];
		j = i-1;
		while (j >= 0 && arr[j] > element) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = element;
	}	
}
```

`Not:` Sorting algoritmaları yukarıdakiler ile sınırlı değildir. Bu algoritmalar dışında farklı bir çok sorting algoritması mevcuttur. 
