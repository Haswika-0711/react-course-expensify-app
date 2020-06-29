import {addExpense,removeExpense,editExpense} from '../../actions/expenses';

test('should setup remove expense object', () =>{
    const action=removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense object', () => {
    const action= editExpense('123abc',{note: 'New note value'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note: 'New note value'
        }
    });
});

test('should setup add expense action object wit provided value',()=>{
    const expenseData={
        description: 'Rent',
        note:'This was last month rent',
        amount:109500,
        createdAt:1000
    };
    const action=addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object wit dfault value',()=>{
    const action=addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});


