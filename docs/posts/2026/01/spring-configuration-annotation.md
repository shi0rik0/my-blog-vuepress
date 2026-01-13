---
date: 2026-01-13
tag:
  - Spring
---

# 关于 Spring 的 @Configuration 注解

在 Spring 框架中，要注册一个 Bean，通常有两种方式：

1. 使用 `@Component` 注解（或者其“子类” `@Service`、`@Repository`、`@Controller`）来标注一个类。这样一来，Spring 会自动创建一个该类的单例 Bean。
2. 使用 `@Configuration` 注解来标注一个类，并在该类中使用 `@Bean` 注解来标注方法。这样一来，Spring 会调用这些方法并将其返回值注册为一个 Bean。

使用 `@Configuration` 来注册 Bean 会更加灵活，比如可以用不同的参数来创建不同的 Bean 实例。

下面是一个使用 `@Configuration` 和 `@Bean` 注解的示例，用于注册两个不同的 `MyQueue` Bean：

```java
@Configuration
public class AppConfig {

    @Bean
    public MyQueue firstQueue() {
        return new MyQueue("first-queue");
    }

    @Bean
    public MyQueue secondQueue() {
        return new MyQueue("second-queue");
    }
}
```

一个 `@Configuration` 类可以包含多个 `@Bean` 方法，一个项目中也可以有多个 `@Configuration` 类。
