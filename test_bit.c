#include <stdio.h>
int main(int argc, char const *argv[])
{
	char x = 52;
	printf("%x\n", x ^ x << 2 & x);
	return 0;
}