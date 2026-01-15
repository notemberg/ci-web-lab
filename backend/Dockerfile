FROM golang:1.22-alpine AS build
WORKDIR /app
COPY go.mod ./
RUN go mod tidy
COPY . .
RUN go build -o app

FROM alpine:latest
WORKDIR /app
COPY --from=build /app/app .
EXPOSE 4000
CMD ["./app"]