# 8Puzzle - Trabalho Católica

Aluno: Felipe Pedreli e Bruno Henrique
Curso: Engenharia de Software

Pesquisa sobre algoritmos de busca informados:
a.	Greedy Search
b.	A* Search
c.	Graph Search

<h1>Greedy Search:</h1>

<p>Introdução: Os greedy algorithms são fundamentais nos estudos de algoritmos e otimizações, não à toa o mundo acadêmico faz questão de mencioná-los em uma variedade de cursos de algoritmos ou de computação. Mas algumas definições podem passar uma ideia equivocada sobre o que eles realmente são, e do que são capazes.</p>

<p>O que é o algoritmo Greedy Search: Para resolver um problema, um algoritmo guloso escolhe, em cada iteração, o objeto mais apetitoso que vê pela frente. (...) Um algoritmo guloso é míope: ele toma decisões com base nas informações disponíveis na iteração corrente, sem olhar as consequências que essas decisões terão no futuro. Um algoritmo guloso jamais se arrepende ou volta atrás: as escolhas que faz em cada iteração são definitivas.
Então, no meu pensamento Greedy Search é uma estratégia gulosa que tem por abordagem encontrar a melhor resposta para cada passo, sem se importar em resolver esse passo novamente ou com os passos seguintes, esperando como consequência um resultado global ótimo. Acabamos por ter algoritmos mais simples e intuitivos em grande parte dos casos, mas não necessariamente apresentando a melhor resposta.</p>



<h1>Algoritmo A* Search:</h1> 
<p>O que é o algoritmo A* Search?</p>

<p>É um algoritmo para Busca de Caminho. Este algoritmo é uma das melhores e mais populares técnicas usadas na localização de caminhos e nos percursos de gráficos. Ele busca o caminho em um grafo de um vértice inicial até um vértice final. Ele é a combinação de aproximações heurísticas como do algoritmo Breadth First Search (Busca em Largura) e da formalidade do Algoritmo de Dijkstra.  O algoritmo foi descrito pela primeira vez em 1968 por Peter Hart, Nils Nilsson, e Bertram Raphael. Na publicação deles, ele foi chamado de algoritmo A; usando este algoritmo com uma heurística apropriada atinge-se um comportamento ótimo, e passou a ser conhecido por A*. Sua aplicação vai desde aplicativos para encontrar rotas de deslocamento entre localidades a resolução de problemas, como a resolução de um quebra-cabeças. Ele é muito usado em jogos.</p>

<p>Motivação da criação: Para aproximar o caminho mais curto em situações da vida real, como mapas, jogos em que pode haver muitos obstáculos. Podemos considerar uma grade 2D com vários obstáculos e começamos a partir de uma célula de origem (cor vermelha abaixo) para alcançar uma célula de objetivo (cor verde abaixo).</p>

 
 
<h1>Graph Search:</h1>
<p>O que é o algoritmo Graph Search?</p>

<p>São algoritmos de pesquisa de profundidade e largura primeiro, e pelo que pesquisei existem dois tipos: o depth-first e o breadth-first. Resumindo, é um algoritmos de pesquisa de largura em primeiro lugar que realizam pesquisas explorando o gráfico uma camada por vez. Eles começam com os nós um nível acima do nó inicial, seguidos pelos nós na profundidade dois, depois na profundidade três e assim por diante até que o gráfico inteiro seja percorrido.</p>
 

<p>Depth-first (DFS)</p>
<p>Objetivo: Dado um gráfico e um vértice S, descobrir cada vértice no alcance gráfico de S.</p>
<p>Estratégia: Assim que um vértice é descoberto, uma nova profundidade é explorada (se possível), mesmo que nem todos os</p> <p>vértices nas profundidades anteriores tenham sido descobertos.</p>

<p>Desvantagens:</p>
<p>1.	Uma árvore em profundidade é construída</p>
<p>2.	No entanto, a distância do caminho mais curto de S a todos os vértices não é garantida</p>

<p></p>
<p>Breadth-first (BFS)</p>
<p>Objetivo: Dado um gráfico e um vértice S, descobrir cada vértice no alcance gráfico de S.</p>
<p>Estratégia: Descubra todos os vértices na distância k de S antes de descobrir qualquer vértice na distância k + 1.</p>

<p>Desvantagens:</p>
<p>1.	A distância do caminho mais curto de S a todos os vértices é encontrada</p>
<p>2.	Uma árvore primeira em largura é construída</p>
