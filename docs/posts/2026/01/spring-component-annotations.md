---
date: 2026-01-12
tag:
  - Spring
---

# Spring 各种 Component 注解的区别

在 Spring 框架中，有 4 个用于标注组件的注解，分别是 `@Component`、`@Service`、`@Repository` 和 `@Controller`。

`@Component` 相当于是其他 3 个注解的“基类”，所以它的语义是最宽泛的，功能也是最少的。

`@Service` 则强调这是一个业务逻辑类，但是它没有带来新的功能。

`@Repository` 则是用于数据访问层的组件，除了语义上的区别之外，它还会带来额外的功能，比如将数据库异常转换为 Spring 的数据访问异常层次结构。例如，不管是的数据库访问用的是 JDBC 还是 JPA，抛出的异常都会被转换为统一的 `DataAccessException`，从而简化了异常处理逻辑。

`@Controller` 则是用于表示控制器（也就是提供 HTTP API）的类，可以通过配合 `@RequestMapping` 等注解来处理 HTTP 请求。所以 `@Controller` 是比较重要的一个注解。
