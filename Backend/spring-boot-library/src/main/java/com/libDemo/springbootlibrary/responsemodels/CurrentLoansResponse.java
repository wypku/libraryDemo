package com.libDemo.springbootlibrary.responsemodels;

import com.libDemo.springbootlibrary.entity.Book;
import lombok.Data;

@Data
public class CurrentLoansResponse {

    public CurrentLoansResponse(Book book, int daysLeft) {
        this.book = book;
        this.daysLeft = daysLeft;
    }

    private Book book;

    private int daysLeft;
}
